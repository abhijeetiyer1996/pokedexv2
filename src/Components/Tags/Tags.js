import classes from "./Tags.module.css";
const Tags = (props) => {
    return (
        <span className={classes.tags}>{props.value} {props.children}</span>
    )
}
export default Tags