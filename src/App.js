import './App.css';
import { useState, useRef } from "react"

function App() {
  const [fruits, setFruits] = useState(["apple", "cherry"]);
  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef("");

  const updateInputVal = (event) => {
    setInputValue(event.target.value);
  }

  const updateArray = () => {
    const newAr = [...fruits, inputValue];
    setFruits(newAr);
    setInputValue("");
    inputFieldRef.current.focus();
  }

 const deleteItem = (index) => {
    const result = fruits.toSpliced(index, 1);
    setFruits(result);
 }

 const detectEnterKey = (event) => {
    if(event.key == "Enter") {
      updateArray();
    }
 }
 

  return (
    <div className='app'>
      <input onChange={updateInputVal} type='text' value={inputValue} ref={inputFieldRef} onKeyUp={detectEnterKey}  />
      <button onClick={updateArray}>ADD</button>

      <ul>
        {
          fruits.map((item, index) => {
            return <li key={index}> {item}  <button onClick={ () => { deleteItem(index) } } >X</button>  </li>
          })
        }
      </ul>
    </div>
  );
}


export default App;
