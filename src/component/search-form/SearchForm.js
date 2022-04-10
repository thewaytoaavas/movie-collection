import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function SearchForm({ getMovie }) {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    getMovie(search);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="First name" onChange={handleOnChange} />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
