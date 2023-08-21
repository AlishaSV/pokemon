import React from "react";
import './App.css';
import styled from '@emotion/styled'
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

const Title = styled.h1`
  text-align: center;
`
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`

function App() {
    const [filter, setFilter] = React.useState('')
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [pokemon, setPokemon] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/pokemon/pokemon.json').then((resp) => resp.json()).then((data) => setPokemon(data))
    }, [])

    return (
        <Container>
            <Title>Pokemon search</Title>

            <TwoColumnLayout>
                <div>
                    <PokemonFilter filter={filter} setFilter={setFilter}
                    /> <PokemonTable
                        filter={filter}
                        pokemon={pokemon}
                        setSelectedItem={setSelectedItem}
                    />
                </div>
                {selectedItem && <PokemonInfo {...selectedItem} />}
            </TwoColumnLayout>
        </Container>
    );
}

export default App;
