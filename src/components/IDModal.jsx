// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const IDModal = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (inputValue === "001") {
      onClose();
    } else {
      setError("ID incorreto. Tente novamente.");
    }
  };

  // Função que escuta o evento de tecla
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Digite o ID do Atendimento</h2>
        <input
          type="text"
          className={`modal-input ${error ? "input-error" : ""}`}
          placeholder="Digite o ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Adicionando a função que lida com o Enter
        />
        {error && <p className="error-message">{error}</p>}
        <button className="modal-button" onClick={handleSubmit}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

IDModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default IDModal;
