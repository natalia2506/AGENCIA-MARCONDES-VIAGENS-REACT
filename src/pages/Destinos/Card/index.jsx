import React from "react";

import PropTypes from 'prop-types'; // validações

import "./style.css";

export default function Card({destino, origem, ida, retorno, preco, imagemcapa }) {
    
  Card.propTypes = {
    destino: PropTypes.string.isRequired,
    origem: PropTypes.string.isRequired,
    ida: PropTypes.string.isRequired,
    retorno: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagemcapa: PropTypes.string.isRequired
  }

  Card.defaultProps = {
    destino: "Cidade de destino",
    origem: "cidade de origem",
    ida: "data de ida",
    retorno: "data do retorno",
    preco: "preço da viagem",
    imagemcapa: "imagem da cidade"

  }
  return(
        <section className="container">

            <div className="card-deck "  >
                    <div className="card" >
                      <img className="card-img-top" src={imagemcapa}  alt="Imagem de capa do card"/>
                      <div className="card-body">
                        <p classNme="card-title"><b>{destino}</b></p>
                        <p>{origem}</p>
                        <p>{ida}</p>
                        <p>{retorno}</p>
                        <p>Preço por pessoa:</p>
                        <p ><b>R${preco}</b></p>
                        <button type="button" className="btn btn-outline-primary btn-sm" >COMPRAR</button>
                      </div>
                    </div>
            </div>

    </section>
    )
}