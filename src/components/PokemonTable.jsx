"use client"
import PokemonRow from "./PokemonRow";
import useBearStore from "@/src/store";
import {useEffect} from "react";

const PokemonTable = ({pokemons}) => {

    const [setPokemon, filter, setSelectedItem] = useBearStore(
        (state) => [
            state.setPokemon,
            state.filter,
            state.setSelectedItem
        ]
    )

    useEffect(() => {
        setPokemon(pokemons)
    }, [pokemons])

    if (!pokemons) return null

    return (
        <table width='100%'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {pokemons.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 25).map((pokemon) =>
                <PokemonRow pokemon={pokemon} key={pokemon.id} onClick={(pokemon) => setSelectedItem(pokemon)}/>
            )}
            </tbody>
        </table>
    )
}

export default PokemonTable