import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CustomList({ movieObj, func, btnDelete = false }) {
  return (
    <div style={{ width: "100%" }}>
      <Card className="mt-5 me-3 d-flex flex-row">
        <Card.Img
          variant="top"
          src={movieObj.Poster}
          style={{ width: "150px" }}
        />
        <Card.Body>
          <Card.Title>{movieObj.Title}</Card.Title>
          <Card.Title>{movieObj.imdbRating}</Card.Title>
          <Card.Title>{movieObj.Actors}</Card.Title>
          <Card.Title>{movieObj.BoxOffice}</Card.Title>
          <Card.Title>{movieObj.Year}</Card.Title>
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
