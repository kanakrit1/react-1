import { useState } from 'react'
import './formStyle.css'

  function Form(){
  
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)

      const inputTitle =(event)=>{
          setTitle(event.target.value)
      }

      const inputAmount =(event)=>{
          setAmount(event.target.value)
      }

      const saveItem = (event)=>{
          event.preventDefault()
          const data = {
              title:title,
              amount:Number(amount)
          }
          console.log(data)
          setTitle('')
          setAmount(0)
      }

      return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                        <label>List</label>
                        <input type="text" placeholder="your name"
                        onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                        <label>amount</label>
                        <input type="number" placeholder="0000"
                        onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                       <button className='btn' type="submit">ADD</button>
                </div>
            </form>
        </div>
      );
  }
  export default Form