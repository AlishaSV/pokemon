import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import {Container} from "@/components/styled";
import {getPokemons} from "@/src/getPokemons";
import {PokemonsStateUpdate} from "@/components/PokemonsStateUpdate";


export default async function Page({params}) {
    const pokemons = await getPokemons()
    const pokemon = pokemons.find(({id}) => id.toString() === params.id)
    if (!pokemon) return null

    return (
        <PokemonsStateUpdate pokemons={pokemons}>
            <Container>
                <div>
                    <h1>{pokemon?.name?.english} </h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Attribute</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(pokemon.base).map(k =>
                                <>
                                    <TableRow key={k}>
                                        <TableCell>{k}</TableCell>
                                        <TableCell>{pokemon.base[k]}</TableCell>
                                    </TableRow>
                                </>
                            )
                            }
                        </TableBody>
                    </Table>
                </div>
            </Container>
        </PokemonsStateUpdate>
    )
}