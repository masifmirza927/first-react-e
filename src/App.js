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

 const deleteItem = (index) => {
    const result = fruits.toSpliced(index, 1);

    setFruits(result);
 }

  return (
    <div className='app'>
      <input onChange={updateInputVal} type='text' />
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
