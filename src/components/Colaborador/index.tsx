import "./Colaborador.css";

interface ColaboradorProps {
  nome: string;
  cargo: string;
  imagem: string;
  corDeFundo: string;
}

const Colaborador = (props: ColaboradorProps) => {
  console.log(props);
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
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
