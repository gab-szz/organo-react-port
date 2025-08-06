import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: {
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }) => void;
  times: string[];
}

export const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2 className="formulario-titulo">
          Preencha os dados para criar o card do colaborador
        </h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          aoAlterado={(valor) => setNome(valor)}
          valor={nome}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          aoAlterado={(valor) => setCargo(valor)}
          valor={cargo}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o caminho da imagem"
          aoAlterado={(valor) => setImagem(valor)}
          valor={imagem}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          aoAlterado={(valor) => setTime(valor)}
          times={props.times}
          valor={time}
        />
        <div className="formulario-botao">
          <Botao children="Criar card" />
        </div>
      </form>
    </section>
  );
};
