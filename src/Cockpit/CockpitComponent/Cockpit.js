import {useState,useEffect} from "react";
import classes from "./Cockpit.module.css"
import PokeCards from "../../Components/PokeCards/PokeCards";
import PokeInfo from "../../Components/PokeInfo/PokeInfo";
import { BiNews} from "react-icons/bi";
import {BiWindowClose} from "react-icons/bi";

const Cockpit = ({pokemons, handLoadMore}) => {
    const [sidebar, setSidebar] = useState({display:"block"});
    const [sidebarStatus, setSidebarStatus] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const setActiveSidebar = (status) => {
        setSidebarStatus(!status)
        if(status)
            setSidebar({width: "100%"})
        else
            setSidebar({width:"0%"})
    }

    return (
        <>
            <div className={classes.pokeInfo} style={sidebar}>
                <button type="button" className={classes.btnClose} onClick={()=>setActiveSidebar(sidebarStatus)}><BiWindowClose /></button>
                <PokeInfo currentPokemon={pokemon}></PokeInfo>
            </div>
            <div className={classes.pokeCards}>
                <div className={classes.heading}>
                <button type="button" className={classes.btnSidebar} onClick={()=>setActiveSidebar(sidebarStatus)}><BiNews /></button>
                    <h1 className={classes.title}>pokedex in react</h1>
                </div>
                <div className={classes.pokeCardsContainer}>
                    {          
                        pokemons.sort((a, b) => a.id - b.id).map((pokemon)=>
                            {   return <PokeCards 
                                    key= {pokemon.id}
                                    image = {pokemon.sprites.other['official-artwork'].front_default}
                                    name = {pokemon.name} 
                                    pokeId = {pokemon.id}
                                    types = {pokemon.types}
                                    handleClick = {() => setPokemon(pokemon)}
                                />
                            }
                        )
                    }
                </div>
                <div className={classes.buttonContainer}>
                    <button type="button" className={classes.loadBtn} onClick={handLoadMore}>Load more</button>
                </div>
            </div>
        </>)
}
export default Cockpit;