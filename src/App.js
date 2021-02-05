import React, {useState} from 'react'
import './App.css';

const listOptions = ['Banana', 'Apple', 'Avocado', 'Pineapple', 'Papaya', 'Orange', 'Peach']

const App = () => {

  const [list, setList] = useState(listOptions)

  const filterOptions = (e) => {
    if(e.target.value.length === 0) {
      setList(listOptions)
    } else {
      let textInput = e.target.value.toLowerCase()
      let filteredList = listOptions.filter(el => el.toLowerCase().startsWith(textInput))
      setList(filteredList);
    }
  }

  return (
    <div className="App">
      <div className="AutoCompleteWrapper">
        <label>Auto Complete Widget:</label>
        <input 
          type="text" 
          list="dictionary"
          id="words"
          onChange={filterOptions}
        />
        <datalist id="dictionary">
          {list.map((el,i) => <option key={i}>{el}</option> )}
        </datalist>
      </div>
    </div>
  );
}
export default App;
