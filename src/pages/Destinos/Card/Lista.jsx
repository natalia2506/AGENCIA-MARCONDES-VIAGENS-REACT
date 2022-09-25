import React from "react";

import "./style.css";

const lista = [
    {
        id: 1,
        destino: "São Paulo",
        origem: "Rio de janeiro",
        ida:"25/05/2025",
        retorno:"25/07/2025",
        preco:1955.00,
        imagemcapa: "https://wallpapertag.com/wallpaper/full/d/b/e/587793-widescreen-sao-paulo-wallpapers-1920x1080.jpg"
    },

    {
        id: 2,
        destino: "Diamantina",
        origem: "São Paulo",
        ida:"01/05/2022",
        retorno:"03/07/2022",
        preco: 855.00,
        imagemcapa: require("../../../assets/img/imgDiamantina.jpeg"),

    },

    {
        id: 3,
        destino: "Poços de Caldas",
        origem: "Rio de janeiro",
        ida:"06/05/2025",
        retorno:"08/07/2025",
        preco: 955.00,
        imagemcapa: require("../../../assets/img/imgPoçosdeCaldas.jpeg"),

    },

    {
        id: 4,
        destino: "Itabira",
        origem: "Rio de janeiro",
        ida:"25/05/2025",
        retorno:"25/07/2025",
        preco: 755.00,
        imagemcapa: require("../../../assets/img/imgItabira.jpeg"),

    },

    {
        id: 5,
        destino: "Nova Lima",
        origem: "Rio de janeiro",
        ida:"25/05/2025",
        retorno:"25/07/2025",
        preco: 2055.00,
        imagemcapa: require("../../../assets/img/imgNovaLima.jpeg"),

    },

    {
        id: 6,
        destino: "Belo Horizonte",
        origem: "Rio de janeiro",
        ida:"25/05/2025",
        retorno:"25/07/2025",
        preco: 1055.00,
        imagemcapa: require("../../../assets/img/imgBeloHorizonte.jpeg"),

    }
 ];

 function Item(props){
    const indice = props.indice;
    const item = lista[indice];

    return(

            <div className="card" >
                <img className="card-img-top" src={item.imagemcapa}  alt="Imagem de capa do card"/>
                <div className="card-body">
                <p classNme="card-title"><b>{item.destino}</b></p>
                <p>{item.origem}</p>
                <p>{item.ida}</p>
                <p>{item.retorno}</p>
                <p>Preço por pessoa:</p>
                <p ><b>R${item.preco}</b></p>
                <button type="button" className="btn btn-outline-primary btn-sm" >Comprar</button>
                </div>
            </div>
    )
 };

 export default function Lista() {
    return(
    
        <div className="container">
            <div className="card-deck ">
                {lista.map ((item, index) => (
                    <Item indice={index} key={index}/>
                ))}
            </div>
        </div>
    
    )
 }