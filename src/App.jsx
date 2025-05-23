import{ useState } from 'react'
import './App.css'

function App() {
     const {value,Setvlaue}=useState(99);

  return (
    <>

 <h1>count {value}</h1>
 <button onClick={
  ()=> {
    setValue(value + 3);
  }
 }>Add3</button>
 <button onClick={
  ()=> {
        setValue(value + 2);
  }
}>Add2</button>
 </>
  )
}


export default App