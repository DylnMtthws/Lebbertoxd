import React from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "../css/Home.css";

function Home({ movies }) {
  return (
    <div className="home-container">
      <div>
        <h2 className="section-title">In Theaters</h2>
        <div className="scroll-container">
          <Row className="movie-row">
            {movies.map((movie) => (
              <Card key={movie.id} className="movie-card">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />

                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
