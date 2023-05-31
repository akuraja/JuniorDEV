import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const animalsRef = ref(database, "animals");
    onValue(animalsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const animalList = Object.values(data);
        setAnimals(animalList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Animal List</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
