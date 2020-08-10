import React, {useEffect} from "react";
import axios from "axios";
import '../App.css';




function Pokemon(props) {

    const [pokemonData, setPokemonData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/' + props.pokename);
                setPokemonData(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);


            }
        }

        fetchData();

    }, [])



    return (



    <div className="pokemon-container">

        {loading === true &&
        <p>Loading...</p>
        }
        {pokemonData !== null &&
        <div>
            <h3>{pokemonData.name}</h3>
            <img src={pokemonData.sprites.front_default} alt="plaatje Pokemon"/>
            <p>Gewicht: {pokemonData.weight}</p>
            <p>Aantal moves: {pokemonData.moves.length}</p>
            <p>onzin {pokemonData.abilities[0].ability.name}</p>

            {/*<p>Lijst abilities: {JSON.stringify(pokemonData.moves)}</p>*/}

            <ul>
                {pokemonData.abilities.map( (item) => {
                    // return console.log(item.ability.name);
                    return  <li>{item.ability.name}</li>;
                }) }
            </ul>


        </div>
        }

    </div>




    );


}
export default Pokemon;