import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
          {
          genre: {
              name: "Drama",
              description: "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed and fast-paced with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories."
          },
          director: {
              name: "Christopher Nolan",
              bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. Most notable works are Memento, Insomnia, Inception, Interstellar, Tenet, and is probably best known for the most recent Batman trilogy.",
              birth: "1970-01-01T00:00:00.000Z"
          },
          actors: ["Guy Pierce", "Carrie-Anne Moss"],
          id: 1,
          title: "Memento",
          image: "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
          featured: false,
          description: "A man seeks vengeance for the murder of his wife, hindered by the fact that he has lost his ability to create long-term memories."
      },
      {
          genre: {
              name: "Drama",
              description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone."
          },
          director: {
              name: "Gus Van Sant",
              bio: "Gus Green Van Sant Jr. is an American filmmaker, painter, screenwriter, photographer and musician from Louisville, Kentucky who is known for directing films such as Good Will Hunting, the 1998 remake of Psycho, Gerry, Elephant, My Own Private Idaho, To Die For, Milk, Last Days, Finding Forrester, Promised Land, Drugstore Cowboy and Mala Noche.",
              birth: "1952-01-01T00:00:00.000Z"
          },
          actors: ["Matt Damon", "Robin Williams"],
          id: 2,
          title: "Good Will Hunting",
          image: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
          featured: false,
          description: "A troubled young man from the wrong side of the tracks is a secret genius who makes a deal to stay out of jail, agreeing to work with an MIT professor and go to therapy."
      },
      {
          genre: {
              name: "Thriller",
              description: "A thriller is a type of mystery with a few key differences. As its name suggests, thrillers tend to be action-packed and fast-paced with moments full of tension, anxiety, and fear. Without fail, they are plot-driven stories."
          },
          director: {
              name: "Steven Spielberg",
              bio: "He is the GOAT.",
              birth: "1946-01-01T00:00:00.000Z"
          },
          actors: ["Sam Neil", "Jeff Goldbloom"],
          id: 3,
          title: "Jurassic Park",
          image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
          featured: true,
          description: "Dinosaurs eat people."
      }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
          }} 
        />
      ))}
    </div>
  );
}