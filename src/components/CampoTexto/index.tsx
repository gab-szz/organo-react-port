import "./CampoTexto.css";

export type CampoTextoProps = {
  label: string;
  placeholder: string;
  obrigatorio?: boolean;
};

const CampoTexto = (props: CampoTextoProps) => {
  const placeholderMod = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type="text"
        id="campo-texto"
        name="campo-texto"
        required={props.obrigatorio}
        placeholder={placeholderMod}
      />
    </div>
  );
};

export default CampoTexto;
