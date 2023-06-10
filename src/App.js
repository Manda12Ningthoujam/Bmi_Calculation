import { useRef ,useState} from 'react';
import './css/App.css';


function App() {
  let NameInput=useRef();
  let [name,SetName]=useState('');
  let [buttonStatus,setButtonStatus] = useState(true);
  function SubmitNameHandler(){
    SetName(NameInput.current.value)
    setButtonStatus(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react.js bootcamp {name} !</h1>
        <input ref={NameInput} placeholder='Enter your name' type='text'/>
        <button className= {buttonStatus == true ? "btn"  : "d-none"} onClick={SubmitNameHandler}>Submit</button>
      </header>
    </div>
  );
}

export default App;
