import { element } from "prop-types";
import DataContext from "../data/DataContext";
import Item from "./item";

const Transaction = (props) =>{

const {items} = props
    return (
      <div>
        {items.map((element)=>{
            return <Item {...element} key={element.id}/>
        })}
        <DataContext.Consumer>
        {value=><p>{value}</p>}
        </DataContext.Consumer>
        
      </div>
    );
  }
export default Transaction