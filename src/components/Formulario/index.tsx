import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
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
  cadastrarTime: (time: { nome: string; cor: string }) => void;
}

export const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [nomeTime, setNomeTime] = useState<string>("");
  const [corTime, setCorTime] = useState<string>("");

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
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          aoAlterado={(valor) => setNome(valor)}
          valor={nome}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          aoAlterado={(valor) => setCargo(valor)}
          valor={cargo}
        />
        <Campo
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
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2 className="formulario-titulo">
          Preencha os dados para criar um novo time
        </h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          aoAlterado={(valor) => setNomeTime(valor)}
          valor={nomeTime}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          aoAlterado={(valor) => setCorTime(valor)}
          valor={corTime}
        />
        <div className="formulario-botao">
          <Botao children="Criar um novo time" />
        </div>
      </form>
    </section>
  );
};
