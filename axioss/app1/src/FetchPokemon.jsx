import React, { useState } from 'react';
import axios from 'axios';

function FetchPokemon() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {
                // Directly use response.data which contains the JSON data
                setPokemon(response.data.results);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <>
            <button onClick={fetchPokemon}>Fetch Data</button>

            <div>
                {pokemon.map((pokemon, index) => (
                    <div key={index}>{pokemon.name}</div>
                ))}
            </div>
        </>
    );
}

export default FetchPokemon;
