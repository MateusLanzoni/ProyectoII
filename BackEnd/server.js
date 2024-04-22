import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import 'dotenv';

const salt = 10;

const app= express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST","GET"],
    credentials: true
}));
app.use(cookieParser());

const daba = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: 'buseseia'
})
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({Error: "Sin autenticar"});
    }
    else{
        const JWT_SECRET=process.env.JWT_SECRET||'Frase';
        jwt.verify(token,JWT_SECRET,(err,decoded) => {
            if(err){
                return res.json({Error: "Problema con el token"});
            }
            else{
                if ( decoded.username && decoded.name && decoded.identification ) {
                    req.name = decoded.name;
                    req.username = decoded.username;
                    req.identification = decoded.identification;
                    next();
                } else {
                    return res.json({Error: "Información del token incompleta"});
                }
            }
        })
    }
}

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ Error: "No existe el token" });
    }
    const JWT_SECRET = process.env.JWT_SECRET || 'Frase';
    jwt.verify(token, JWT_SECRET, (err) => {
        if (err) {
            return res.status(401).json({ Error: "Token invalido" });
        }
        next();
    });
};


app.get('/verify-token', verifyToken, (req, res) => {
    res.json({ Status: "Token valido" });
});


app.get('/cuenta',verifyUser,(req,res) =>{
    return res.json({Status: "Success", name:req.name, username:req.username, identification:req.identification});
})
app.get('/ppal',verifyUser,(req,res) =>{
    return res.json({Status: "Success"});
})
app.get('/contacto',verifyUser,(req,res) =>{
    return res.json({Status: "Success"});
})
app.get('/info',verifyUser,(req,res) =>{
    return res.json({Status: "Success"});
})
app.post('/registro', (req, res) => {
    const { name, username, password, identification } = req.body;

   
    if (!password || password.length < 8) {
        return res.json({ Error: "La contraseña tiene que tener minimo 8 caracteres" });
    }
    if (password === name || password === username) {
        return res.json({ Error: "La contraseña no puede ser la misma que el nombre y nombre de usuario" });
    }

    
    if (!username || username.length < 4 || !name || name.length < 4) {
        return res.json({ Error: "Username and name must be at least 4 characters long" });
    }

    
    if (!identification || (identification.length !== 8 && identification.length !== 10)) {
        return res.json({ Error: "La identificación tiene que ser de 8 o de 10 caracteres" });
    }

    
    const checkIdSql = "SELECT * FROM usuarios WHERE identification = ?";
    daba.query(checkIdSql, [identification], (err, result) => {
        if (err) {
            console.error("Error al chequear la identificación: ", err);
            return res.status(500).json({ Error: "Error al chequear la identificación" });
        }
        if (result.length > 0) {
            return res.json({ Error: "Esa identificación ya esta registrada" });
        }

        
        const sql = "INSERT INTO usuarios (name, username, password, identification) VALUES (?)";
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.error("Error al hashear la contraseña: ", err);
                return res.status(500).json({ Error: "Error al hashear la contraseña" });
            }
            const values = [name, username, hash, identification];
            daba.query(sql, [values], (err, result) => {
                if (err) {
                    console.error("Error al guardar los datos: ", err);
                    return res.status(500).json({ Error: "Error al guardar los datos" });
                }
                return res.json({ Status: "Success" });
            })
        })
    })
})


app.post('/login',(req, res) =>{
    const sql = 'SELECT * FROM usuarios WHERE username = ?';
    daba.query(sql,[req.body.username], (err, data) => {
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Error al comparar con"});
                if(response){
                    const username = data[0].username;
                    const name = data[0].name;
                    const identification = data[0].identification;
                    const JWT_SECRET=process.env.JWT_SECRET||'Frase';
                    const token = jwt.sign({username, name, identification}, JWT_SECRET,{expiresIn:'30m'});
                    res.cookie('token',token);
                    return res.json({Status: "Success"});
                }
                else{
                    return res.json({Error: "La contraseña no coincide"});
                }

            })
        }
        else{
            return res.status(404).json({Error: "No existe una cuenta con ese usuario"});
        }
    })
})

app.get('/logout',(req,res) =>{
    res.clearCookie('token');
    return res.json({Status: "Success"});
})
app.listen(4000, () => {
    console.log("Running.");
})