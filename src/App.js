import './App.css';
import { useState } from "react"


function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "cherry"]);


  return (
    <div className='app'>
     <ul>
       {
        fruits.map( (item, index) => {
          return <li key={index}> {item} </li>
        })
       }
     </ul>
    </div>
  );
}


export default App;
