import { React, useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components"

const DivApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: greenyellow;

`

function App() {
  const [pokeList, SetpokeList] = useState([])
  const [pokeName, SetpokeName] = useState("")


  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        SetpokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getPokemons()
  }, [])

  const changePokename = event => {
    SetpokeName(event.target.value)
  }

  return (
    <DivApp>
      <select onChange={changePokename}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>);
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </DivApp>
  );
}

export default App;
