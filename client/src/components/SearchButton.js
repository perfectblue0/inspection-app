import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="m-2"
        variant="secondary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Advanced Search
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Form className="m-3">
            <Row className="mb-2">
              <Col>
                <Form.Control placeholder="EVENT NO." />
              </Col>
              <Col>
                <Form.Control placeholder="LANE" />
              </Col>
              <Col>
                <Form.Control placeholder="LPR" />
              </Col>
              <Col>
                <Form.Control placeholder="CONTAINER 1" />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Control placeholder="STATUS" />
              </Col>
              <Col>
                <Form.Control placeholder="RFID" />
              </Col>
              <Col>
                <Form.Control placeholder="PROCESSED BY" />
              </Col>
              <Col>
                <Form.Control placeholder="LAST UPDATED ON" />
              </Col>
            </Row>
            <Button variant="primary">Search</Button>
          </Form>
        </div>
      </Collapse>
    </>
  );
}

export default SearchButton;
