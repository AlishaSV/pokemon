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
    return (
        <Container>
            <Title>Pokemon search</Title>
            <TwoColumnLayout>
                <div>
                    <PokemonFilter/>
                    <PokemonTable/>
                </div>
                <PokemonInfo />
            </TwoColumnLayout>
        </Container>
    );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default App;
