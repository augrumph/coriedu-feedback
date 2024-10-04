// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./styles/alunoReview.css";
import logo from "./assets/images/logo.png";
import Logo from "./assets/images/logo.png";

import CardVisaoProfessor from "./components/cardsContent/CardProfessor";
import CardIntroducao from "./components/cardsContent/CardIntroducao";
import CardRespostas from "./components/cardsContent/CardRespostas";
import CardAnaliseRespostas from "./components/cardsContent/CardAnaliseRespostas";
import CardReconstrucaoRaciocinio from "./components/cardsContent/CardReconstrucaoRaciocinio";
import CardCaminhoDiagnostico from "./components/cardsContent/CardCaminhoDiagnostico";
import CardComparacaoRaciocinio from "./components/cardsContent/CardComparacaoRaciocinio";
import CardPontosFortes from "./components/cardsContent/CardPontosFortes";
import CardAreasMelhoria from "./components/cardsContent/CardAreasMelhoria";
import CardRecomendacoes from "./components/cardsContent/CardRecomendacoes";
import CardAnexos from "./components/cardsContent/CardAnexos";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div>
      <nav className="navbar fixed-navbar">
        <div className="logo-container">
          <img id="logo" src={darkMode ? Logo : logo} alt="Logo" />
        </div>
      </nav>

      <div className="container">
        <h1>Relatório de Análise Clínica</h1>

        <CardVisaoProfessor />
        <CardIntroducao />
        <CardRespostas />
        <CardAnaliseRespostas />
        <CardReconstrucaoRaciocinio />
        <CardCaminhoDiagnostico />
        <CardComparacaoRaciocinio />
        <CardPontosFortes />
        <CardAreasMelhoria />
        <CardRecomendacoes />
        <CardAnexos />
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Alternar Tema"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default App;
