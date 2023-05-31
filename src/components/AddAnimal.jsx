import React, { useState } from 'react';
import database from '../Firebase';

const AddAnimal = () => {
  const [animalName, setAnimalName] = useState('');

  const handleInputChange = (e) => {
    setAnimalName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animalName.trim() !== '') {
      const newAnimalRef = database.ref('animals').push();
      newAnimalRef.set({
        name: animalName,
      });
      setAnimalName('');
    }
  };

  return (
    <div>
      <h2>Add Animal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Animal Name"
          value={animalName}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddAnimal;
