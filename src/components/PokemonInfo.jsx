import React from "react";
import PokemonType from "../PokemonTypes";
import useBearStore from "../store";

const PokemonInfo = () => {
    const selectedItem = useBearStore(state => state.selectedItem)
    return selectedItem ? (
    <div>
        <h1>{selectedItem.name.english}</h1>
        <table>
            {Object.keys(selectedItem.base).map((key) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{selectedItem.base[key]}</td>
                </tr>
            ))}
        </table>
    </div>
    ) : null
}

export default PokemonInfo

PokemonInfo.propTypes = PokemonType

