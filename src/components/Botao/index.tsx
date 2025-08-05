import "./Botao.css";

type BotaoProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  onClick?: () => void;
};

const Botao = ({ children, onClick }: BotaoProps) => {
  return (
    <button className="botao" onClick={onClick}>
      {children}
    </button>
  );
};

export default Botao;
