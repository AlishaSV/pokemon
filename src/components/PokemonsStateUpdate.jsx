"use client"
import useBearStore from "@/src/store";
import {useEffect} from "react";

export const PokemonsStateUpdate = ({children,pokemons}) => {
    const [setPokemons] = useBearStore((state) => [
        state.setPokemon
    ])
    useEffect(() => {
        setPokemons(pokemons)
    }, [pokemons])
  return <>{children}</>
}