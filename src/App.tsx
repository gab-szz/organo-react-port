import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const times = [
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#1565c0", // Azul forte
      corSecundaria: "#e3f2fd", // Azul bem leve
    },
    { nome: "Front-End", corPrimaria: "#2e7d32", corSecundaria: "#e8f5e9" }, // Verde forte e leve
    { nome: "Back-End", corPrimaria: "#4e342e", corSecundaria: "#efebe9" }, // Marrom forte e leve
    { nome: "Mobile", corPrimaria: "#f9a825", corSecundaria: "#fffde7" }, // Amarelo forte e leve
    { nome: "Data Science", corPrimaria: "#0277bd", corSecundaria: "#e1f5fe" }, // Azul forte e leve
    { nome: "UX/UI", corPrimaria: "#ad1457", corSecundaria: "#fce4ec" }, // Rosa forte e leve
    { nome: "Marketing", corPrimaria: "#6a1b9a", corSecundaria: "#f3e5f5" }, // Roxo forte e leve
    { nome: "Vendas", corPrimaria: "#ef6c00", corSecundaria: "#fff3e0" }, // Laranja forte e leve
  ];

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
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
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
