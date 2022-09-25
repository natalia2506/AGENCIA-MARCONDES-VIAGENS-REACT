import React from "react";
import Contatos from "./tabela/contatos";

import "./style.css";

export default function Contato (){
    return(
        <main>
        <section>
          <h6 className="text-titulo" >CONTATOS</h6>
          <p className="text-titulo">Deixe sua mensagem</p>
        </section>
    
        <section>
          <div  className="container">
            <form>
    
              <div className="form-group">
                <label for="exampleFormControlInput1">Nome</label>
                <input type="name" className="form-control" placeholder="Digite seu nome"/>
              </div>
    
              <div className="form-group">
                <label for="exampleFormControlInput1">E-mail</label>
                <input type="email" className="form-control" placeholder="Digite seu e-mail"/>
              </div>
    
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Deixe sua mensagem</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
    
              <div>
                <button type="submit" className="btnContato btn"><a className="link" href="mailto:contato@marcondesagenciadeviagens.com">Enviar</a></button>
              </div>
    
            </form>
          </div>
        </section>
    
      <Contatos/>
      </main>
    )

};