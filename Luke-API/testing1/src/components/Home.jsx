import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [resource, setResource] = useState('people');
  const [selectedId, setSelectedId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      let response;
      if (resource === 'people') {
        response = await axios.get(`https://swapi.dev/api/people/${selectedId}/`);
      } else if (resource === 'planet') {
        response = await axios.get(`https://swapi.dev/api/planets/${selectedId}/`);
      }
      setResult(response.data);
    } catch (err) {
      setError('Error fetching data');
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resource-select">Search for: </label>
        <select
          id="resource-select"
          value={resource}
          onChange={(e) => setResource(e.target.value)}
        >
          <option value="people">People</option>
          <option value="planet">Planet</option>
        </select>

        <label htmlFor="id-input">ID: </label>
        <input
          id="id-input"
          type="number"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}
      {result && (
        <div>
          {resource === 'people' ? (
            <>
              <h2>Name: {result.name}</h2>
              <p>Height: {result.height}</p>
              <p>Mass: {result.mass}</p>
              <p>Hair Color: {result.hair_color}</p>
              <p>Skin Color: {result.skin_color}</p>
            </>
          ) : (
            <>
              <h2>Name: {result.name}</h2>
              <p>Climate: {result.climate}</p>
              <p>Terrain: {result.terrain}</p>
              <p>Surface Water: {result.surface_water}</p>
              <p>Residents: {result.residents.join(', ')}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
