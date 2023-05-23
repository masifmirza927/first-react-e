import './App.css';
import { useState } from "react"


function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "cherry"]);


  return (
    <div className='app'>
     <ul>
       {
        fruits.map( (item) => {
          return <li>{item}</li>
        })
       }
     </ul>
    </div>
  );
}

export default App;
