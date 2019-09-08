import React from "react";

const ToggleButton = props => {
  let toggleButton;

  if (props.sideListOpen) {
    toggleButton = <div className="toggle-button__line active"></div>;
  } else {
    toggleButton = <div className="toggle-button__line"></div>;
  }

  return (
    <div className="toggle-button">
      <div className="toggle-button__button" onClick={props.click}>
        {toggleButton}
        {toggleButton}
        {toggleButton}
      </div>
    </div>
  );
};

export default ToggleButton;
