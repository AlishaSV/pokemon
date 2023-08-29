"use client"
import styled from "@emotion/styled";
import useBearStore from "@/src/store";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`

export default function Page({params}) {
    const pokemon = useBearStore(state => state.pokemon.find(({id}) => id.toString() === params.id))

    return pokemon ? (
        <Container>
            <div>
               <h1>{pokemon?.name?.english} </h1>
                <Table>
                    <TableHead>
                        <TableRow />
                        <TableCell>Attribute</TableCell>
                        <TableCell>Value</TableCell>
                        <TableRow />
                    </TableHead>
                    <TableBody>
                        {Object.keys(pokemon.base).map(k =>
                           <>
                                <TableRow key={k}/>
                                <TableCell>{k}</TableCell>
                                <TableCell>{pokemon.base[k]}</TableCell>
                                <TableRow />
                           </>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </Container>
    ) : null
}