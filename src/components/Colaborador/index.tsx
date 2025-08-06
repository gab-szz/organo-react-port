import "./Colaborador.css";

interface ColaboradorProps {
  nome: string;
  cargo: string;
  imagem: string;
}

const Colaborador = (props: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={props.imagem} alt="Colaborador" />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};
export default Colaborador;
