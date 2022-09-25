import React from "react";

import Imagen11 from "../../assets/img/imgNL.jpeg"

export default function Home(){
    return(
      <>
        <div className="destaque" style={{ backgroundImage: `url(${Imagen11})`}}>
          <div className="position-relative overflow-hidder p-3 p-md-1 m-md-5 m-md-3 text-center bg-transparent">
            <div className="col-md-8 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Aproveite as suas férias com os melhores pacotes que a Marcondes oferece!</h1>
            <p className="lead fw-normal">Conheça as cidades de Minas Gerais</p>
            </div>
          </div>
        </div>
      </>

    )
};