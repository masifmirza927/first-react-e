import './App.css';
import { useState, useRef } from "react"

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef("");

  const updateInputVal = (event) => {
    setInputValue(event.target.value);
  }

  const updateArray = () => {
    const newAr = [...tasks, inputValue];
    setTasks(newAr);
    setInputValue("");
    inputFieldRef.current.focus();
  }

  const deleteItem = (index) => {
    const result = tasks.toSpliced(index, 1);
    setTasks(result);
  }

  const detectEnterKey = (event) => {
    if (event.key == "Enter") {
      updateArray();
    }
  }

// handling checked tasks, completed tasks  
  const handleCheckbox = (event, item, index) => {
    if(event.target.checked == true) {
      const newAr = [...completedTasks, item];
      setCompletedTasks(newAr);
      // removing from tasks array
      deleteItem(index);
    }
  }


  return (
    <div className='app'>
      <div className='container'>
        <div className='inputBox'>
          <input onChange={updateInputVal} type='text' value={inputValue} ref={inputFieldRef} onKeyUp={detectEnterKey} />
          <button className='btn' onClick={updateArray}>ADD</button>
        </div>

        <div className='listBox'>
          <h3>Active Tasks</h3>
          <ul>
            {
              tasks.map((item, index) => {
                return (<li key={index}> 
                  <input onChange={ (event) => handleCheckbox(event, item, index) } type='checkbox' />
                  <span>{item}</span>
                  <button className='delBtn' onClick={() => { deleteItem(index) }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(255 0 0)"}}><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                  </button>
                </li>
                )
              })
            }
          </ul>

          
            <div>
              <h3>Completed Tasks</h3>
            <ul>
            {
              completedTasks.map((item, index) => {
                return (<li key={index}> 
                  <input type='checkbox' />
                  <span>{item}</span>
                  <button className='delBtn' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgb(255 0 0)"}}><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                  </button>
                </li>
                )
              })
            }
          </ul>
            </div>



        </div>

      </div>
    </div>
  );
}


export default App;
