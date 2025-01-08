import React, { useState } from "react";
import Modal from "./Modal";

const BreedList = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchImages = async (breed, subBreed = null) => {
    const breedPath = subBreed ? `${breed}/${subBreed}` : breed;
    const response = await fetch(`https://dog.ceo/api/breed/${breedPath}/images/random/4`);
    const data = await response.json();
    setImages(data.message);
    setShowModal(true);
  };

  const handleBreedClick = (breed, subBreed) => {
    setSelectedBreed(subBreed ? `${subBreed} ${breed}` : breed);
    fetchImages(breed, subBreed);
  };

  return (
    <div style={styles.container}>
      <ul style={styles.breedList}>
        {Object.entries(breeds).map(([breed, subBreeds]) => (
          <div key={breed} style={styles.breedItem}>
            <li
              onClick={() => handleBreedClick(breed)}
              style={styles.breedName}
            >
              {breed}
            </li>
            {subBreeds.length > 0 && (
              <ul style={styles.subBreedList}>
                {subBreeds.map((subBreed) => (
                  <li
                    key={subBreed}
                    onClick={() => handleBreedClick(breed, subBreed)}
                    style={styles.subBreedName}
                  >
                    {subBreed}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>

      {showModal && (
        <Modal
          title={selectedBreed}
          images={images}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  breedList: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '800px',
    margin: '0 auto',
  },
  breedItem: {
    marginBottom: '12px',
  },
  breedName: {
    padding: '10px 15px',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#2980b9',
    }
  },
  subBreedList: {
    listStyle: 'none',
    padding: '0 0 0 20px',
    marginTop: '8px',
  },
  subBreedName: {
    padding: '8px 15px',
    backgroundColor: '#e8f4f8',
    color: '#2c3e50',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '6px',
    fontSize: '14px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#d5e9f2',
    }
  },
};

export default BreedList;