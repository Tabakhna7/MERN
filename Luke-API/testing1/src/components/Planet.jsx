import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Planet() {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => setPlanet(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!planet) return <div>Loading...</div>;

  return (
    <div>
      <h2>Name: {planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Residents: {planet.residents.join(', ')}</p>
    </div>
  );
}

export default Planet;
