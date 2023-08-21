import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
    const {pokemon, filter, setSelectedItem} = React.useContext(PokemonContext)
    return (
    <table width='100%'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter)).slice(0, 25).map((pokemon) =>
            <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => setSelectedItem(pokemon)}/>
        )}
        </tbody>
    </table>
    )
}

export default PokemonTable