import React from "react";
import Button from '@mui/material-next/Button';
import PokemonType from "../PokemonTypes";
import PropTypes from "prop-types";

const PokemonRow = ({pokemon, onClick}) => (
    <tr>
        <td>{pokemon.name.english}</td>
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