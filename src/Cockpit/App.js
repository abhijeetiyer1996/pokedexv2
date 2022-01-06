import classes from './App.module.css';
import {useState, useEffect} from "react";
import Cockpit from "./CockpitComponent/Cockpit.js"

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

  const getAllPokemons = async() =>{
    const response = await fetch(loadMore);
    const pokemons = await response.json();
    setLoadMore(pokemons.next); 
    pokemons.results.forEach(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const pokeData = await res.json();
      setAllPokemons(currentPokeList => [...currentPokeList, pokeData]);
    });
  }
 
  useEffect(()=>{
    getAllPokemons();
  },[])
  

  return (
    <div className={classes.container}>
      <Cockpit pokemons = {allPokemons} handLoadMore={()=>{getAllPokemons()}}/>
    </div>
  );
}

export default App;
