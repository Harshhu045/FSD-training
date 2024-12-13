// App.jsx
import React from "react";
import movies from "./components/movies";
import Card from "./components/card"; // Ensure "Card" is properly capitalized
import "./App.css"; // Add styles if needed

const App = () => {
  return (
    <div className="app">
      <h1>Movie List</h1>
      <div className="card-container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.image}
            language={movie.language}
            cost={movie.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
