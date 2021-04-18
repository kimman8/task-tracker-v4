import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import AddButton from "./AddButton";

const Header = ({ title, onToggle, showCUNT }) => {
  return (
    <header>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1px",
        }}
      >
        <h1>{title}</h1>
        <AddButton
          // buttonTitle="Show Add Task"

          buttonTitle={showCUNT ? "Show Add Task" : "Close Add Task"}
          color={showCUNT ? "success" : "danger"}
          onClick={onToggle}
        />
      </Row>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker!!",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
