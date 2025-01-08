import React, { useState, useEffect } from "react";
import axios from 'axios';

import BreedList from "./components/BreedList";

const App = () => {
  const [breeds, setBreeds] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        setBreeds(response.data.message);
      } catch (err) {
        setError("Failed to fetch breeds");
      }
    };
    fetchBreeds();
  }, []);

  return (
    <div>
      <h1>Dog Picture Application</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <BreedList breeds={breeds} />
      )}
    </div>
  );
};

export default App;
