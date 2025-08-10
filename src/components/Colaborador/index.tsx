import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
  aoFavoritar(id: string): unknown;
  id: string;
  nome: string;
  cargo: string;
  imagem: string;
  favorito: boolean;
  corDeFundo: string;
  aoDeletar: (id: string) => void;
}

const Colaborador = (props: ColaboradorProps) => {
  function favoritar() {
    props.aoFavoritar(props.id);
  }
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        color="red"
        className="deletar"
        onClick={() => props.aoDeletar(props.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.imagem} alt="Colaborador" />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
        <div className="favoritar">
          {props.favorito ? (
            <AiFillHeart size={25} color="red" onClick={favoritar} />
          ) : (
            <AiOutlineHeart size={25} color="gray" onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Colaborador;
