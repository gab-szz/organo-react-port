import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  aoFavoritar: (id: string) => unknown;
  colaboradores: {
    id: string;
    indice?: number;
    nome: string;
    cargo: string;
    imagem: string;
    favorito: boolean;
    time: string;
  }[];
  nome: string;
  cor: string;
  id: string;
  aoDeletar: () => void;
  mudarCor: (cor: string, id: string) => void;
}

const Time = (props: TimeProps) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}
      >
        <input
          value={props.cor}
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div>
          {props.colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                id={colaborador.id}
                corDeFundo={props.cor}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                favorito={colaborador.favorito}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
