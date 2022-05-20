import './App.css';
import Transaction from './component/Tran';
import Form from './component/form';


const Description = ()=> <p>Record Daily</p>

const design = {color:'green',fontSize:20,textAlign:'center'}


function App() {
  return (
      <div>
        <h1 style={design}>PROGRAM</h1>
        <Form/>
        <Transaction/>
      </div>
  );
}

export default App;
