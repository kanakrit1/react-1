import '../App.css'

function Item(props){
  
    return <li className='item-list'>{props.title} -{props.amount}</li>
} 
export default Item