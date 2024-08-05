import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function People() {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => setPerson(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!person) return <div>Loading...</div>;

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Skin Color: {person.skin_color}</p>
    </div>
  );
}

export default People;
