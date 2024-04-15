app.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  //Add User
  app.post('/add-user', async (req, res) => {
    try {
      const { name, username, password, identification } = req.body;
  
      // hacer metodo de Validar informacion
  
      const newUser = await User.create({ name, username, password, identification });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });