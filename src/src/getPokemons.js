export async function getPokemons() {
    return (await fetch(`http://localhost:3000/pokemon.json`)).json()
}