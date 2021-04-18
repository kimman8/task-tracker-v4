import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const newID = Math.floor(Math.random() * 10000 + 3);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task!");
      return;
    }

    onAdd({ id:newID, text, date, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col className="md">
            <Form.Group controlId="formEmail">
              <Form.Label>Event</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. laundry, cooking, etc"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="md">
            <Form.Group controlId="formName">
              <Form.Label>Date & Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. 25th May at 5pm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="md">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Do you need a reminder?"
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Control
            variant="primary btn-block mb-3"
            type="submit"
            value="save task"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTask;
