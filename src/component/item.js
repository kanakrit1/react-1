import '../App.css'
import './item2.css'
import DataContext from '../data/DataContext'
function Item(props){
    const {title,amount} = props
    const status = amount<0 ?"expense":"income"
    const symbol = amount<0 ?"":"+"
    return <li className={status}>{props.title}{symbol}{props.amount}
        <DataContext.Consumer>
        {value=><p>{value}</p>}
        </DataContext.Consumer>
    </li>
} 

export default Item