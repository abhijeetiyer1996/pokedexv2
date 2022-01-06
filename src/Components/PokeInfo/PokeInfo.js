import classes from "./PokeInfo.module.css";
import {useState, useEffect} from "react";
import Tags from "../Tags/Tags";
import Tabs from "../Tabs/Tabs";

const PokeInfo = ({currentPokemon}) =>{
    const {abilities, stats, moves, height, weight, name, sprites} = currentPokemon;
    const [abilityStyle, setAbilityStyle] = useState({});
    const [statsStyle, setStatsStyle] = useState({});
    const [movesStyle, setMovesStyle] = useState({});
    const [currentTab, setCurrentTab] = useState(<Tags/>);

    useEffect(()=>{
        setCurrentTab();
        setAbilityStyle({})
        setStatsStyle({})
        setMovesStyle({})
    },[currentPokemon]);

    const setTabActive = (tabName, pokeSpecs) => {
        setAbilityStyle({})
        setStatsStyle({})
        setMovesStyle({})
    
        if(tabName === 'abilities'){
            setAbilityStyle({border: "1px solid rgba(0,0,0,0.4)", 
                             background: "#fff"});
            setCurrentTab(<Tabs 
                           heading="abilities" 
                           specs={pokeSpecs} 
                           specName="ability"/>
                        )
        }

        else if(tabName === 'stats'){
            setStatsStyle({border: "1px solid rgba(0,0,0,0.4)", background: "#fff"})
            setCurrentTab(<Tabs
                            heading="stats" 
                            specs={pokeSpecs} 
                            specName="stat"/>)
        }
        else if(tabName === 'moves'){

            setMovesStyle({border: "1px solid rgba(0,0,0,0.4)", 
                           background: "#fff"})

            setCurrentTab(<Tabs 
                heading="moves" 
                specs={pokeSpecs} 
                specName="move"/>)
        }
    }

       if(Object.keys(currentPokemon).length !== 0){

        return( 
            <div className={classes.infoContainer}>
                <div className={classes.header}>{name}</div>

                <div className={classes.avatar}>
                    <div>
                        <Tags value="height">
                            <Tags value = {height}/>
                        </Tags>
                    </div>
                    <img src={sprites.other['official-artwork'].front_default}/>
                    <div>
                        <Tags value= "weight">
                            <Tags value = {weight} />
                        </Tags>
                    </div>
                </div>

                <div className={classes.infoSection}>
                    <button 
                        style={abilityStyle} 
                        className={classes.btn} 
                        onClick = {() => setTabActive('abilities', abilities)}>
                            abilities
                    </button> 
                    <button 
                        style={statsStyle}
                        className={classes.btn} 
                        onClick = {() => setTabActive('stats', stats)}>
                            stats
                    </button> 
                    <button 
                        style={movesStyle} 
                        className={classes.btn} 
                        onClick = {() => setTabActive('moves', moves)}>
                            moves
                    </button>
                </div>
                <div>
                    {currentTab}
                </div>
            </div>   
        )
       }
       else{
           return <div></div>
       }
}
export default PokeInfo;