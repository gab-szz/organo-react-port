import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario";
import Time from "./components/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#e3f2fd",
    }, // Azul forte e leve
    { id: uuidv4(), nome: "Front-End", cor: "#e8f5e9" }, // Verde forte e leve
    { id: uuidv4(), nome: "Back-End", cor: "#efebe9" }, // Marrom forte e leve
    { id: uuidv4(), nome: "Mobile", cor: "#fffde7" }, // Amarelo forte e leve
    { id: uuidv4(), nome: "Data Science", cor: "#e1f5fe" }, // Azul forte e leve
    { id: uuidv4(), nome: "UX/UI", cor: "#fce4ec" }, // Rosa forte e leve
    { id: uuidv4(), nome: "Marketing", cor: "#f3e5f5" }, // Roxo forte e leve
    { id: uuidv4(), nome: "Vendas", cor: "#fff3e0" }, // Laranja forte e leve
  ]);

  const [colaboradores, setColaboradores] = useState<
    {
      id: string;
      nome: string;
      cargo: string;
      imagem: string;
      favorito: boolean;
      time: string;
    }[]
  >([
    {
      id: uuidv4(),
      nome: "Gabriel",
      cargo: "Desenvolvedor",
      imagem: "https://github.com/gab-szz.png",
      favorito: false,
      time: "Front-End", // ou outro nome de time existente
    },
  ]);

  const aoColaboradorCadastrado = (colaborador: {
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }) => {
    setColaboradores([
      ...colaboradores,
      { ...colaborador, id: uuidv4(), favorito: false },
    ]);
  };

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: { nome: string; cor: string }) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          return { ...colaborador, favorito: !colaborador.favorito };
        }
        return colaborador;
      })
    );
  }

  return (
    <>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoColaboradorCadastrado}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          id={time.id}
          cor={time.cor}
          mudarCor={mudarCorDoTime}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={() => deletarColaborador(time.id)}
          aoFavoritar={resolverFavorito}
        />
      ))}
    </>
  );
}

export default App;
