import React from "react";
import { Col, Alert, Row, Button } from "react-bootstrap";

const Task = ({ task, onFUCKme, onReminder }) => {
  return (
    <div>
      <Alert
        variant={task.reminder ? "success" : "warning"}
        onDoubleClick={() => onReminder(task.id)}
        className="border"
      >
        <Row>
          <Col xs={10}>
            <h4>{task.text}</h4>

            <p className="lead">{task.date}</p>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1px",
            }}
          >
            <Button variant="danger " onClick={() => onFUCKme(task.id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Alert>
    </div>
  );
};

export default Task;
