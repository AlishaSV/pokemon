import PokemonFilter from "@/components/PokemonFilter";
import PokemonTable from "@/components/PokemonTable";
import PokemonInfo from "@/components/PokemonInfo";
import {Container, Title, TwoColumnLayout} from "@/components/styled";
import {getPokemons} from "@/src/getPokemons";


export default async function Home() {
    const pokemons = await getPokemons()

    return (
            <Container>
                <Title>Pokemon search</Title>
                <TwoColumnLayout>
                    <div>
                        <PokemonFilter/>
                        <PokemonTable pokemons={pokemons}/>
                    </div>
                    <PokemonInfo/>
                </TwoColumnLayout>
            </Container>
    )
}
