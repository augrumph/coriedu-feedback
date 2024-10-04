// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";

const IDModal = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "001") {
      onClose(); // Chama a função onClose quando o ID é correto
    } else {
      setError("ID incorreto. Tente novamente.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Digite o ID de Acesso</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Insira o ID"
          className={`modal-input ${error ? "input-error" : ""}`}
        />
        {error && <p className="error-message">{error}</p>}
        <button className="modal-button" onClick={handleSubmit}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

// Validação de props com PropTypes
IDModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default IDModal;
