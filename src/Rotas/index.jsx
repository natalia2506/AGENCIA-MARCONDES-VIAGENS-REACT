import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./style.css";

import Home from "../pages/Home";
import Destinos from "../pages/Destinos";
import Promocoes from "../pages/promocoes";
import Contato from "../pages/Contato";
import CadastroCliente from "../pages/CadastroCliente";
import Login from "../pages/Login";



export default function Rotas() {
   return(
       <BrowserRouter>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to='/'></Link><span class="sr-only"></span></a>
      </li>

      
      <li class="nav-item">
         <li class="nav-link"><Link to='/'>Home</Link></li>
      </li>

      <li class="nav-item">
         <li class="nav-link"><Link to='/cadastro'>Cadastre-se</Link></li>
      </li>

      <li class="nav-item">
         <li class="nav-link"><Link  to='/destinos'>Destinos</Link></li>
      </li>

      <li class="nav-item">
         <li class="nav-link"><Link to='/promocoes'>Promoções</Link></li>
      </li>

      <li class="nav-item">
         <li class="nav-link"><Link to='/contato'>Contato</Link></li>
      </li>

    </ul>

    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link className="link" to='/login'>Login</Link></button>
    </form>
  </div>
</nav>


          <Routes>
          <Route  path="/" element={ <Home />}  />
           <Route path="/destinos" element = { <Destinos/> } />
           <Route path="/promocoes" element = { <Promocoes />}   />
           <Route path="/contato" element = {< Contato />}  />
           <Route path="/cadastro" element = { <CadastroCliente />}  />
           <Route path="/login" element = { <Login />}  />
          </Routes>
       </BrowserRouter>
   )
}

