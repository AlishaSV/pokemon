import Link from 'next/link'
import Button from '@mui/material-next/Button';
import PokemonType from "@/src/PokemonTypes";
import PropTypes from "prop-types";

const PokemonRow = ({pokemon, onClick}) => (
    <tr>
        <td>
            <Link href={`/pokemon/${pokemon.id}`}>
                {pokemon.name.english}
            </Link>
        </td>
        <td>{pokemon.type.join(', ')}</td>
        <td>
            <Button onClick={() => onClick(pokemon)}>Select</Button>
        </td>
    </tr>
)

PokemonRow.propTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
    onClick: PropTypes.func
};

export default PokemonRow