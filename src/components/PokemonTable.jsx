import React from "react";
import PokemonRow from "./PokemonRow";
import useBearStore from "../store";

const PokemonTable = () => {
    const pokemon = useBearStore(state => state.pokemon)
    const filter = useBearStore(state => state.filter)
    const setSelectedItem = useBearStore(state => state.setSelectedItem)

    return (
    <table width='100%'>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
        </tr>
        </thead>
        <tbody>
        {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 25).map((pokemon) =>
            <PokemonRow pokemon={pokemon} key={pokemon.id} onClick={(pokemon) => setSelectedItem(pokemon)}/>
        )}
        </tbody>
    </table>
    )
}

export default PokemonTable