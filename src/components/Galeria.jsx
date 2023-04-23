import { useContext } from "react";
import Context from "../context/Context";
import Corazon from "../assets/iconos/heart-outline.svg"
import CorazonFilled from "../assets/iconos/heart-filled.svg"
import "../assets/css/galeria.css";

export default function Home() {
  const { fotos, setFotos } = useContext(Context)

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, i) => {
        return <ul key={foto.id}>
          <div className="contenedor"
            onClick={() => {
              const foto = fotos[i]
              const estadoDelLike = foto.liked
              if (estadoDelLike) foto.liked = false;
              else foto.liked = true;
              setFotos([...fotos]);
            }}
          >
            <img src={foto.src.tiny} />
            <div className="texto-encima">{foto.alt}</div>
            <div className="corazones">
              {foto.liked ? (
                <img height="32" src={CorazonFilled} alt="corazón lleno" />
              ) : (
                <img height="38" src={Corazon} alt="corazón vacío" />)
              }
            </div>
          </div>
        </ul>
      })}
    </div>
  );
}
