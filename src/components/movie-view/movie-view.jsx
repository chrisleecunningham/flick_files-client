import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";


export const MovieView = ({ movie, onBackClick }) => {
  const [openGenre, setOpenGenre] = useState(false);
  const [openBio, setOpenBio] = useState(false);

  return (
    <Row>
      <Col md={6}>
        <Image src={movie.image} />
      </Col>
      <Col>
        <Stack gap={3}>
          <div>Title: {movie.title}</div>
          <div>"{movie.description}"</div>
          <div>
            Genre: {movie.genre.name} <Button
           
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
              
        <Button onClick={onBackClick}>Back</Button>
      </Col>
    </Row>        
  ); 
};