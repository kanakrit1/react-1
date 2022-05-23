import '../App.css'
import './item2.css'

function Item(props){
    const {title,amount} = props
    const status = amount<0 ?"expense":"income"
    const symbol = amount<0 ?"":"+"
    return <li className={status}>{props.title}{symbol}{props.amount}</li>
} 

export default Item