import "./ListaSuspensa.css";

type ListaSuspensaProps = {
  times?: string[];
  aoAlterado(value: string): void;
  label: string;
  obrigatorio: boolean;
};

const ListaSuspensa = (props: ListaSuspensaProps) => {
  const times = props.times ?? [];
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
