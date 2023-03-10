/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./movie-view.scss";


export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const [openGenre, setOpenGenre] = useState(false);
  const [openBio, setOpenBio] = useState(false);

  const movie = movies.find((m) => m.id === movieId);

  return (
    <Row>
      <Col md={6}>
        <img className="w-100 h-100" src={movie.image} /> 
      </Col>
      <Col>
        <Stack gap={3}>
          <div>Title: {movie.title}</div>
          <div>"{movie.description}"</div>
          <div>
            Genre: {movie.genre.name} 
           <Button
              variant="link"
              onClick={() => setOpenGenre(!openGenre)}
            >
              More Info
            </Button>
            <Collapse in={openGenre}>
              <div>
                {movie.genre.description}  
              </div> 
            </Collapse>
          </div>
          <div>
            Director: {movie.director.name}
            <Button
              variant="link"
              onClick={() => setOpenBio(!openBio)}
            >
              Bio
            </Button>
            <Collapse in={openBio}>
              <div>
                {movie.director.bio}  
              </div> 
            </Collapse>
          </div>
        </Stack>
        <Link to={`/`}>      
          <Button className="back-button">Back</Button>
        </Link>
      </Col>
    </Row>        
  ); 
};