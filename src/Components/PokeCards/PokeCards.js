import classes from "./PokeCards.module.css";
import Tags from "../Tags/Tags";
const pokeCards = (props) =>{
    return (
    <div className={classes.cardContainer} onClick = {props.handleClick}>
        <div className={classes.avatar}>
            <img alt="pokemonImage" src={props.image} className={classes.cardImage}/> 
        </div>
        <div className={classes.infoPanel}>
            <div className={classes.header}>
                <span className={classes.pokeId}>#{props.pokeId}</span>
            </div>
            <div className={classes.pokeInfo}>
                <div className={classes.pokeName}>{props.name}</div>
                <div className={classes.typeContainer}>
                    {
                        props.types.map((typeSlots, index)=>{
                            return <Tags key={index} value = {typeSlots.type.name} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
} 
export default pokeCards;