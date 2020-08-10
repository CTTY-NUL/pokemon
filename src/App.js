import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon";

function App() {



    const [pokemonData2, setPokemonData2] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                setPokemonData2(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);


            }
        }

        fetchData();

    }, [])






    return (
      <div>
          <p>sadasd</p>
          {pokemonData2.

        <Pokemon pokename="ditto"></Pokemon>
          <Pokemon pokename="bulbasaur"></Pokemon>
          <Pokemon pokename="pikachu"></Pokemon>
      </div>
    );
}

export default App;
