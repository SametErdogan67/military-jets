import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import AircraftCard from "./AircraftCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search..."
        type="search"
        className="w-50 m-auto mb-5"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 m-auto mb-3">
        <Row className="g-4 justify-content-center">
          {data
            .filter((aircraft) =>
              aircraft.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((aircraft) => (
              <Col xl={3} lg={4} md={6} sm={6} xs={12}>
                <AircraftCard aircraft={aircraft} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
