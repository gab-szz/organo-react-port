import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = () => {
  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log(evento.target);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o caminho da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Times" />
        <Botao children="Criar card" />
      </form>
    </section>
  );
};
