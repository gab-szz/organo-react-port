import "./ListaSuspensa.css";

type ListaSuspensaProps = {
  aoAlterado(value: string): void;
  label: string;
  obrigatorio: boolean;
};

const ListaSuspensa = (props: ListaSuspensaProps) => {
  const times = [
    "Inovação e Gestão",
    "DevOps",
    "Front-End",
    "Back-End",
    "Mobile",
    "Data Science",
    "UX/UI",
    "Marketing",
    "Vendas",
  ];

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        name=""
        id=""
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        {times.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
