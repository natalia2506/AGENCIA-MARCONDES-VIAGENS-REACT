import React from "react";

import "./style.css"

import imagem7 from "../../assets/img/logoS2.jpeg"

export default function Footer() {
    return(
    <footer  class="footer">
        <div class="img-footer">
         <img src={imagem7} alt="logo Marcondes"/> 
        </div>
         <div>
           <p class="footer-texto">&copy; Todos os direitos reservados - Marcondes 2022</p>
         </div>
     </footer> 
    )
}
