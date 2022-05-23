import './App.css';
import Transaction from './component/Tran';
import Form from './component/form';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

// const Description = ()=> <p>Record Daily</p>

const design = {color:'red',fontSize:20,textAlign:'center'}


function App() {
  const [items,setitems] = useState([])
  const onAddNewItem = (newItem)=>{
    setitems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
      <div>
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Form onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
  );
}

export default App;
