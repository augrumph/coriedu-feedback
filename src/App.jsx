// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Moon, Sun, List, FileText } from "lucide-react";
import "./styles/alunoReview.css";
import logo from "./assets/images/logo.png";
import Logo from "./assets/images/logo.png";
import IDModal from "./components/IDModal"; // Novo componente modal

import CardVisaoProfessor from "./components/cardsContent/Resumo";
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
  const [showSummary, setShowSummary] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true); // Estado para controle do modal

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleShowSummary = () => {
    setShowSummary(true);
  };

  const handleShowDetailed = () => {
    setShowSummary(false);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal após o ID correto ser inserido
  };

  return (
    <div>
      {/* Exibe o modal se o estado isModalOpen for true */}
      {isModalOpen && <IDModal onClose={closeModal} />}

      {/* Exibe o conteúdo apenas quando o modal estiver fechado */}
      {!isModalOpen && (
        <>
          {/* Navbar fixa */}
          <nav className="navbar fixed-navbar">
            <div className="logo-container">
              <img id="logo" src={darkMode ? Logo : logo} alt="Logo" />
            </div>
          </nav>

          {/* Conteúdo principal */}
          <div className="container">
            <h1>Relatório de Análise Clínica</h1>

            {/* Botões de alternância */}
            <div className="button-container">
              <button
                className={`toggle-button ${showSummary ? "active" : ""}`}
                onClick={handleShowSummary}
              >
                <List size={18} /> Resumo
              </button>
              <button
                className={`toggle-button ${!showSummary ? "active" : ""}`}
                onClick={handleShowDetailed}
              >
                <FileText size={18} /> Detalhes
              </button>
            </div>

            {/* Renderização Condicional */}
            {showSummary ? (
              <CardVisaoProfessor /> // Mostra o card do resumo
            ) : (
              <div>
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
            )}
          </div>

          {/* Botão de troca de tema flutuante */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar Tema"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </>
      )}
    </div>
  );
};

export default App;
