import{ useState } from 'react'
import './App.css'

function App() {
     const {value,Setvlaue}=useState(99);

  return (
    <>

 <h1>count {value}</h1>
 <button onClick={
  ()=> {
    Setvalue(value + 3);
  }
 }>Add3</button>
 </>

  )
}

export default App