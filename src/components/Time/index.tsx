import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  colaboradores: {
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }[];
  nome: string;
  corSecundaria: string;
  corPrimaria: string;
}

const Time = (props: TimeProps) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </section>
    )
  );
};

export default Time;
