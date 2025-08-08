import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  colaboradores: {
    indice?: number;
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }[];
  nome: string;
  corSecundaria: string;
  corPrimaria: string;
  aoDeletar: () => void;
}

const Time = (props: TimeProps) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div>
          {props.colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                corDeFundo={props.corPrimaria}
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
