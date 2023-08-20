import React from "react";
import './App.css';
import pokemon from './pokemon.json'
import PropTypes from 'prop-types';

const PokemonRow = ({pokemon}) => (
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
    </tr>
)

PokemonRow.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.shape({
            english: PropTypes.string
        }),
        type: PropTypes.arrayOf(PropTypes.string)
    })
}

function App() {
    const [filter, filterSet] = React.useState('')
  return (
    <div
    style={{
        margin: "auto",
        width: 800,
        paddingTop: '1rem'
    }}
    >
      <h1 className='title'>Pokemon search</h1>
        <input
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
        />
        <div>
            <table width='100%'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter)).slice(0, 25).map((pokemon) =>
                    <PokemonRow pokemon={pokemon} key={pokemon.id} />
                )}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default App;
