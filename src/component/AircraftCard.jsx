import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsFillAirplaneFill } from "react-icons/bs";

const AircraftCard = ({ aircraft }) => {
  const [showImage, setShowImage] = useState(true);
  const { name, img, statistics } = aircraft;

  return (
    <Card
      onClick={() => setShowImage(!showImage)}
      className="rounded-2 m-auto aircraft-card"
      role="button"
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="aircraft-logo" />
      ) : (
        <ul className="m-auto">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start list-unstyled">
                <BsFillAirplaneFill className="fs-5" /> {item}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default AircraftCard;
