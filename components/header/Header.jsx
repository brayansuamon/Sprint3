export default function Header(){
    const [mostrarnocturno,setMostrarnocturno] = useState("false"); 

    const manejarClick = () =>{
     setMostrarnocturno(true);
    }
    
    return (
        <header className="header">
        {mostrarnocturno ? 
         (<img src="./images/logo-mobile-modo-noct.svg" alt="Modo Nocturno" />) : (<img src="./images/logo-desktop.svg" alt="Modo Diurno" />)}
        <button value={mostrarnocturno} onClick={manejarClick}>
            {mostrarnocturno ? "MODO DARK" : "MODO LIGTH"}
        </button>
         </header>
    )


}