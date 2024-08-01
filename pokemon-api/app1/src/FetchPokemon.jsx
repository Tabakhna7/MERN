import React, { useState } from 'react';
import axios from 'axios';

function FetchPokemon() {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response =>  setPokemon(response.results))
        .catch(err => { console.log(err)});
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
