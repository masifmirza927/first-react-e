import './App.css';
import { useState } from "react"
import MyFirstComp from "./MyFirstComp"

function App() {
  const [age, setAge] = useState(18);

const updateAge = () => {
    setAge(20)
}
  return (
    <div className='app'>
     <h1>welcome to my application - {age} </h1>
     <button onClick={updateAge} >Update Age</button>
     <MyFirstComp parent="xyz"  />
    </div>
  );
}

export default App;
