import React from "react";

import "./style.css"

import Promocoes from "./Card/promocao";

export default function Promocao() {
    return(
        <main>
          <section>
            <p className="first">PROMOÇÕES PARA SUA VIAGEM</p>
          </section>

          <section>
            <Promocoes/>
          </section>
</main>
    )
};