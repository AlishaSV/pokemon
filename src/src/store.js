import { create } from 'zustand'

const useBearStore = create((set) => ({
    pokemon: [],
    filter: '',
    selectedItem: null,
    setPokemon: (pokemon) =>
        set((state) => ({
            ...state,
            pokemon,
        })),
    setFilter: (filter) =>
        set((state) => ({
            ...state,
            filter,
        })),
    setSelectedItem: (selectedItem) =>
        set((state) => ({
            ...state,
            selectedItem,
        }))
}))

if(typeof window !== 'undefined') {
    fetch('/pokemon.json')
        .then((resp) => resp.json())
        .then((pokemon) =>
            useBearStore.setState((state) => ({
                ...state,
                pokemon
            }))
        )
}

export default useBearStore