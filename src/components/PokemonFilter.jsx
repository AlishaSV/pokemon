import styled from "@emotion/styled";
import useBearStore from "@/src/store";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`

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