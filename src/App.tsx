import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Inovação e Gestão",
      cor: "#e3f2fd",
    }, // Azul forte e leve
    { nome: "Front-End", cor: "#e8f5e9" }, // Verde forte e leve
    { nome: "Back-End", cor: "#efebe9" }, // Marrom forte e leve
    { nome: "Mobile", cor: "#fffde7" }, // Amarelo forte e leve
    { nome: "Data Science", cor: "#e1f5fe" }, // Azul forte e leve
    { nome: "UX/UI", cor: "#fce4ec" }, // Rosa forte e leve
    { nome: "Marketing", cor: "#f3e5f5" }, // Roxo forte e leve
    { nome: "Vendas", cor: "#fff3e0" }, // Laranja forte e leve
  ]);

  const [colaboradores, setColaboradores] = useState<
    { nome: string; cargo: string; imagem: string; time: string }[]
  >([]);

  const aoColaboradorCadastrado = (colaborador: {
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador() {
    console.log("Deletar colaborador com ID");
  }

  function mudarCorDoTime(cor: string, timeNome: string) {
    setTimes(
      times.map((time) => {
        if (time.nome === timeNome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  return (
    <>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoColaboradorCadastrado}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          mudarCor={mudarCorDoTime}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={() => deletarColaborador()}
        />
      ))}
    </>
  );
}

export default App;
