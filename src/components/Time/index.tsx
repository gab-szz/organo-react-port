import "./Time.css";

interface TimeProps {
  nome: string;
  corSecundaria: string;
  corPrimaria: string;
}

const Time = (props: TimeProps) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
