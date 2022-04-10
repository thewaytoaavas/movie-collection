import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CustomCard({ movieObj, func, btnDelete = false }) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mt-5 me-3">
        <Card.Img variant="top" src={movieObj.Poster} />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Title>{movieObj.imdbRating}</Card.Title>
          <Card.Title>{movieObj.Actors}</Card.Title>
          <Card.Title>{movieObj.BoxOffice}</Card.Title>
          <Card.Title>{movieObj.Year}</Card.Title>

          {btnDelete ? (
            <div className="d-grid gap-2">
              <Button
                variant="danger"
                size="lg"
                onClick={() => func(movieObj.imdbID)}
              >
                Delete
              </Button>
            </div>
          ) : (
            <div className="d-flex justify-content-around">
              <Button variant="info" onClick={() => func("Happy")}>
                Happy
              </Button>
              <Button variant="secondary" onClick={() => func("Lazy")}>
                Lazy
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
