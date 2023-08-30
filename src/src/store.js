import { create } from 'zustand'

const useBearStore = create( (set) => ({
    pokemons: [],
    filter: '',
    selectedItem: null,
    setPokemon: (pokemons) =>
        set((state) => ({
            ...state,
            pokemons,
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

export default useBearStore