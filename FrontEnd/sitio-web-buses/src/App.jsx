import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import {Info} from './pages/Info'
import {Contacto} from './pages/Contacto'
import {Home} from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Cuenta } from './pages/Cuenta'

function App() {
  return(
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/info' element={<Info></Info>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route path= '/ppal' element={<Home></Home>}></Route>
        <Route path= '/registro' element={<Register></Register>}></Route>
        <Route path= '/login' element={<Login></Login>}></Route>
        <Route path= '/login' element={<Login></Login>}></Route>
        <Route path= '/cuenta' element={<Cuenta></Cuenta>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
