import React from "react";
import  Header  from "../components/header/Header";

export default function App(){

  

    return(
        <div>
            <Header/>
            <div>
                <h1>¡Inspirate y busca los mejores <span className="GIFS">GIFS</span>!</h1>
                <img src="./images/ilustra_header.svg" alt="Ilustracion" />
                <form action="">
                    <div>
                        <div>
                            <img src="" alt="Icono Cerrar" />
                            <input type="text" />
                        </div>
                        <blutton><img src="" alt="Busqueda" /></blutton>
                    </div>
                </form>
            </div>

        </div>
    )

}