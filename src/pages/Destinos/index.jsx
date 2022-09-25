import React from "react";

import Lista from "./Card/Lista";

import Card from "./Card";

import "./style.css";


export default function Destinos() {
    return(
    
    <main>
      <section >
        <div>
          <p  class="first">DESTINOS</p>
          <p class="second">Férias merecidas é aqui na Marcondes</p>
          <p class="second">Melhores pacotes pra você!</p>
        </div>
      </section>

        <Lista/>
           <br />
        <Card 
  
          destino="Diamantina"
          origem="Sâo Paulo"
          ida="27/07/2022"
          retorno="27/07/2022"
          preco={1599.99}/>
    </main>
    )
};