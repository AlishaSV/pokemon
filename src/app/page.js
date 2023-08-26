"use client"
import PokemonFilter from "@/components/PokemonFilter";
import PokemonTable from "@/components/PokemonTable";
import PokemonInfo from "@/components/PokemonInfo";
import styled from "@emotion/styled";

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
export default function Home() {
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
  )
}
