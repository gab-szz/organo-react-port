import "./Campo.css";

export type CampoProps = {
  type?: string;
  label: string;
  placeholder: string;
  obrigatorio?: boolean;
  valor?: string;
  aoAlterado: (valor: string) => void;
};

const Campo = (props: CampoProps) => {
  const placeholderMod = `${props.placeholder}...`;

  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input
        type={props.type || "text"}
        id="campo-texto"
        name="campo-texto"
        required={props.obrigatorio}
        placeholder={placeholderMod}
        onChange={aoDigitar}
        value={props.valor || ""}
      />
    </div>
  );
};

export default Campo;
