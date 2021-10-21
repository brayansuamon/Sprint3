import React from "react";

export default function App(){


    return(
        <div>
            <header className="header">
                condicion ? 
                (<img src="./images/logo-desktop.svg" alt="Modo Diurno" />) : <img src="./images/logo-mobile-modo-noct.svg" alt="Modo Nocturno" />
                <button>
                    condicion ? "MODO LIGTH" : "MODO DARK"
                </button>
            </header>
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