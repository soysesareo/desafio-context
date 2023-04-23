import { useContext } from "react";
import Context from "../context/Context";

export default function Favoritos() {

  const { fotos } = useContext(Context)
  const favoritas = fotos.filter((foto) => foto.liked === true)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <p>¿Dónde están las favoritas...?</p>
      {favoritas.map((favorita, i) => {
        <div className="p-3 galeria grid-columns-4">
          return
          <>
            <img src={favorita.src.tiny} />
          </>
        </div>
      })}
    </div>
  );
}
