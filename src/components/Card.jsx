// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children }) => (
  <div className="card">
    <div className="card-header">
      <h2 className="card-title">{title}</h2>
    </div>
    <div className="card-body">{children}</div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
