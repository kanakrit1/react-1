import Item from "./item";
import { v4 as uuidv4 } from 'uuid';



const Transaction = () =>{

    const data = [
      {title:"hospital",amount:1000},
      {title:"fuel",amount:3000},
      {title:"rent",amount:4004},
      {title:"food",amount:2400}
    ]

    return (
      
      <div> 
        {/* <Item title ={data[0].title} amount={data[0].amount}/>
        <Item title ={data[1].title} amount={data[1].amount}/>
        <Item title ={data[2].title} amount={data[2].amount}/>
        <Item title ={data[3].title} amount={data[3].amount}/> */}

        {data.map((element)=>{
             return <Item title={element.title} amount={element.amount} key = {uuidv4()}/>
        })}
      </div>

    );
  }
export default Transaction