import classes from "./Tabs.module.css";
import Tags from "../Tags/Tags";
const Tabs = ({heading, specs, specName}) => {
    return  <div>
                <div className={classes.tab}>
                    <div className={classes.heading}>{heading}</div>
                    <div className={classes.tags}>
                        {specs.map((spec,index)=>{
                            if(specName === 'stat'){
                                return <Tags
                                key={index} 
                                value={spec[specName].name}>
                                    <Tags value={spec['base_stat']}/>
                                </Tags>
                            }
                            else{
                               return <Tags key={index} value={spec[specName].name}/>
                            }
                        })}
                    </div>
                </div>
            </div>
}
export default Tabs;