// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, ChevronDown } from "lucide-react";

const CollapsibleSection = ({
  subtitleNumber,
  title,
  children,
  index,
  activeSections,
  toggleSection,
}) => (
  <div className="info-section">
    <div className="subtitle-container">
      <span className="subtitle-circle">{subtitleNumber}</span>
      <button className="collapsible" onClick={() => toggleSection(index)}>
        {activeSections.includes(index) ? <ChevronDown /> : <ChevronRight />}
        {title}
      </button>
    </div>
    <div
      className="content"
      style={{ display: activeSections.includes(index) ? "block" : "none" }}
    >
      {children}
    </div>
  </div>
);

CollapsibleSection.propTypes = {
  subtitleNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  activeSections: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleSection: PropTypes.func.isRequired,
};

export default CollapsibleSection;
