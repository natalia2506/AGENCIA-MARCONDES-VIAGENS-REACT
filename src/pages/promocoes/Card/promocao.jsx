import React from "react";

import "../style.css";

const promocao = [
  
    {
        id: 1,
        destino: "Diamantina",
        origem: "São Paulo",
        ida:"01/05/2022",
        retorno:"03/07/2022",
        precoAntigo: 1989.22,
        preco: 855.00,
        imagemcapa: require("../../../assets/img/imgDiamantina.jpeg"),

    },

    {
        id: 2,
        destino: "Poços de Caldas",
        origem: "Rio de janeiro",
        ida:"06/05/2025",
        retorno:"08/07/2025",
        precoAntigo: 1989.22,
        preco: 955.00,
        imagemcapa: require("../../../assets/img/imgPoçosdeCaldas.jpeg"),

    },

    {
        id: 3,
        destino: "Itabira",
        origem: "Rio de janeiro",
        ida:"25/05/2025",
        retorno:"25/07/2025",
        precoAntigo: 1989.22,
        preco: 755.00,
        imagemcapa: require("../../../assets/img/imgItabira.jpeg"),

    },
 ];

 function Item(props){
    const indice = props.indice;
    const item = promocao[indice];

    return(

            <div className="card" >
                <img className="card-img-top" src={item.imagemcapa}  alt="Imagem de capa do card"/>
                <div className="card-body">
                <p classNme="card-title"><b>{item.destino}</b></p>
                <p>{item.origem}</p>
                <p>{item.ida}</p>
                <p>{item.retorno}</p>
                <p>Preço por pessoa:</p>
                <p className="text"><small><s>{item.precoAntigo}</s></small></p>
                <p ><b>R${item.preco}</b></p>
                <button type="button" className="btn btn-outline-primary btn-sm" >Comprar</button>
                </div>
            </div>

    )
 };

 export default function Promocoes() {
    return(
    
        <div className="container">
            <div className="card-deck ">
                {promocao.map ((item, index) => (
                    <Item indice={index} key={index}/>
                ))}
            </div>
        </div>
    
    )
 }