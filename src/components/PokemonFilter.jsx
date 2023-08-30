"use client"
import useBearStore from "@/src/store";
import {Input} from "@/components/styled";

const PokemonFilter = () => {
    const setFilter = useBearStore(state => state.setFilter)
    const filter = useBearStore(state => state.filter)

    return <Input
        type='text'
        value={filter}
        onChange={(evt) => {
            setFilter(evt.target.value)
        }}
    />
}

export default PokemonFilter