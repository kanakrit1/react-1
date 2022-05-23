import { element } from "prop-types";
import Item from "./item";

const Transaction = (props) =>{

const {items} = props
    return (
      <div>
        {items.map((element)=>{
            return <Item {...element} key={element.id}/>
        })}
      </div>
    );
  }
export default Transaction