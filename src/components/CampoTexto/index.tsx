import "./CampoTexto.css";

export type CampoTextoProps = {
  label: string;
  placeholder: string;
  obrigatorio?: boolean;
  valor?: string;
  aoAlterado: (valor: string) => void;
};

const CampoTexto = (props: CampoTextoProps) => {
  const placeholderMod = `${props.placeholder}...`;

  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type="text"
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

export default CampoTexto;
