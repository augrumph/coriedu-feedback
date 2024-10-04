// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const InfoSection = ({ subtitleNumber, title, children }) => (
  <div className="info-section">
    <div className="subtitle-container">
      <span className="subtitle-circle">{subtitleNumber}</span>
      <h3 className="info-title">{title}</h3>
    </div>
    {children}
  </div>
);

InfoSection.propTypes = {
  subtitleNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoSection;
