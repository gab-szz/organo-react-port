import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  colaboradores: {
    indice?: number;
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }[];
  nome: string;
  cor: string;
  aoDeletar: () => void;
  mudarCor: (cor: string, nome: string) => void;
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
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div>
          {props.colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                corDeFundo={props.cor}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
