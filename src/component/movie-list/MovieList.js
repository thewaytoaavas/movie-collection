import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";
import CustomList from "../card/CustomList";

export default function MovieList({ movieList, deleteMovie }) {
  const [mood, setMood] = useState("");
  const [isGrid, setGrid] = useState("true");

  //filter first then display
  const filterMovie = mood
    ? movieList.filter((movie) => movie.Cat === mood)
    : movieList;

  return (
    <div className="py-3">
      <Row>
        <Col>{mood || "all"} List Is Selected</Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <ButtonGroup>
            <Button variant="primary" onClick={() => setMood("")}>
              All
            </Button>
            <Button variant="info" onClick={() => setMood("Happy")}>
              Happy
            </Button>
            <Button variant="warning" onClick={() => setMood("Lazy")}>
              Lazy
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary" onClick={() => setGrid(true)}>
              Grid
            </Button>
            <Button variant="info" onClick={() => setGrid(false)}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap">
          {filterMovie.map((movie, i) =>
            isGrid ? (
              <CustomCard
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            ) : (
              <CustomList
                key={i}
                movieObj={movie}
                btnDelete={true}
                func={deleteMovie}
              />
            )
          )}
        </Col>
      </Row>
    </div>
  );
}
