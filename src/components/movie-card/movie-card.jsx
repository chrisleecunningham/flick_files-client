import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img className="w-100 h-60" variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Genre: {movie.genre.name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
  _id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  genre: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  }),
  director: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    birth: PropTypes.string,
  }),
  featured: PropTypes.boolean,
  })
}; 