import React from "react";
import Appcontext from "../../context/Appcontext";

export default function Autocomplete() {
  const { dataauto } = useContext(Appcontext);
  return (
    <>
      {dataauto.length !== [] ? (
        <div>
          <ul className="Automatica">
            {dataauto.map((dato) => {
              return <li>dato.name</li>;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}
