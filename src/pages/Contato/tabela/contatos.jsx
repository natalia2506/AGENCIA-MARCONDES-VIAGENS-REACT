import React from "react";

import "../style.css";
const contatos = [

    {
        id: 1,
        desenho: <i className="fas fa-envelope-square"></i>,
        contat: <a className="link" href="mailto:contato@marcondesagenciadeviagens.com">contato@marcondes.com</a>
    },

    {
        id: 2,
        desenho: <i className="fab fa-brands fa-whatsapp"></i>,
        contat: <a className="link" href="contato@marcondesagenciadeviagens.com" target="_blank">(31) 957777-7777</a>
    },

    {
        id: 3,
        desenho:  <i className="fas fa-solid fa-phone"></i>,
        contat:  <a className="link" href="contato@marcondesagenciadeviagens.com" target="_blank">(31) 5777-7777</a>

    },

    {
        id: 4,
        desenho:  <i className="fab fa-brands fa-twitter"></i>,
        contat: <a className="link" href="contato@marcondeagensciadeviagens.com" target="_blank">marcondesagenciadeviagens</a>

    },

    {
        id: 5,
        desenho:   <i className="fab fa-brands fa-facebook"></i>,
        contat:  <a className="link" href="contato@marcondeagensciadeviagens.com" target="_blank">marcondes.agenciadeviagens</a>
               
    },

    {
        id: 6,
        desenho:   <i className="fab fa-linkedin"></i>,
        contat:   <a className="link"href="contato@marcondesagenciadeviagens.com" target="_blank">marcondes-agencia.de.viagens</a>

    },

    {
        id: 7,
        desenho:  <i className="fab fa-brands fa-youtube"></i>,
        contat: <a className="link" href="contato@marcondesagenciadeviagens.com" target="_blank">marcondes_agencia_de_viagens</a>

    },

    {
        id: 8,
        desenho: <i className="fab fa-brands fa-instagram"></i>,
        contat:  <a className="link" href="contato@marcondesagenciadeviagens.com" target="_blank">marcondes-agencia-de-viagens</a>

    },

    {
        id: 9,
        desenho: <i className="fab fa-brands fa-snapchat"></i>,
        contat:  <a className="link" href="contato@marcondesagenciadeviagens.com" target="_blank">marcondes.agencia.de.viagens</a>

    }


];

function Item(props) {
    const indice = props.indice;
    const item = contatos[indice];

    return (
                <div>
                    <i className="link">{item.desenho}</i>
                    <a className="link" href="#">{item.contat}</a>
                </div>

    )
};

export default function Contatos() {
    return (

        <div className="containerContato">
            <div className="contatos">
                {contatos.map((item, index) => (
                    <Item indice={index} key={index} />
                ))}
            </div>
        </div>

    )
}