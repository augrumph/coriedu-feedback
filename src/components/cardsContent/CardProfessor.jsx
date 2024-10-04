// eslint-disable-next-line no-unused-vars
import React from "react";

const CardProfessor = () => (
  <div className="card professor-summary">
    <div className="card-header">
      <h2 className="card-title">1. Resumo</h2>
    </div>
    <div className="card-body">
      <div className="info-section">
        <h3 className="info-title">
          <span className="subtitle-number">1</span> Pontos Fortes
        </h3>
        <ul className="info-content">
          <li>
            Identificação clara de sintomas como tosse produtiva e febre,
            fundamentais para o diagnóstico inicial.
          </li>
          <li>
            Organização estruturada das informações, facilitando a compreensão e
            análise do caso clínico.
          </li>
          <li>
            Seleção adequada de exames iniciais como o raio-X de tórax,
            essencial para a avaliação pulmonar.
          </li>
        </ul>
      </div>
      <div className="info-section">
        <h3 className="info-title">
          <span className="subtitle-number">2</span> Áreas para Melhoria
        </h3>
        <p className="info-content">
          É necessário ampliar o diagnóstico diferencial, considerando outras
          possíveis patologias além da bronquite, como pneumonia, insuficiência
          cardíaca e DPOC exacerbada. Além disso, deve-se levar em conta fatores
          de risco importantes, como idade avançada e tabagismo, que aumentam a
          predisposição a infecções respiratórias graves. Uma análise mais
          completa dos sintomas é fundamental, correlacionando sinais como febre
          alta com infecções bacterianas graves e justificando a solicitação de
          exames complementares específicos, como hemoculturas.
        </p>
      </div>
    </div>
  </div>
);

export default CardProfessor;
