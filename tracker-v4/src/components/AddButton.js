import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

const AddButton = ({ buttonTitle, color, onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        variant={color}
        className="mb-2"
        size="lg"
        block
      >
        {buttonTitle}
      </Button>
    </div>
  );
};
AddButton.defaultProps = {
  buttonTitle: "Add Task Cunt",
  color: "warning",
};
AddButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default AddButton;
