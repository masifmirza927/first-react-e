import './App.css';
import { useState } from "react"

function App() {
  const [fruits, setFruits] = useState(["apple", "cherry"]);
  const [inputValue, setInputValue] = useState("");

  const updateInputVal = (event) => {
    setInputValue(event.target.value);
  }

  const updateArray = () => {
    const newAr = [...fruits, inputValue];
    setFruits(newAr);
  }

 const deleteItem = (targetItem) => {
    
    const resutl = fruits.filter( (item) => {
        return item != targetItem
    });
    setFruits(resutl);
 }

  return (
    <div className='app'>
      <input onChange={updateInputVal} type='text' />
      <button onClick={updateArray}>ADD</button>

      <ul>
        {
          fruits.map((item, index) => {
            return <li key={index}> {item} <button onClick={ () => { deleteItem(item) } } >X</button> </li>
          })
        }
      </ul>
    </div>
  );
}


export default App;
