import '../css/App.css';
import { useRef ,useState} from 'react';

function Bmi() {
  let heightInput=useRef();
  let weightInput=useRef();
  let [bmi,SetBmi]=useState('');
  let [buttonStatus,setButtonStatus] = useState(true);
  function calculateBMIHandler(){
    bmi=weightInput.current.value/(heightInput.current.value/100 * heightInput.current.value/100)
    if(bmi<=18.5)
    {
        SetBmi('You are Underweight');
    }
    else if(bmi>18.5 && bmi<=24.9)
    {
        SetBmi('You are Normal');
    }
    else if(bmi>25 && bmi<=29.9)
    {
        SetBmi('You are Overweight');
    }
    else if(bmi>30 && bmi<=35)
    {
        SetBmi('You are Obesity');
    }
    else
    {
        SetBmi('You are severe Obesity');
    }
    
  }
  
  return (
    <div className="Container">
        <h3>{bmi}</h3>
        <h2>Calculate your BMI</h2>
        <div className='flex'>
            <input ref={heightInput} placeholder='Enter your height' type='text'/>
            <input ref={weightInput} placeholder='Enter your weight' type='text'/>
        </div>
        <button className= {buttonStatus == true ? "btn"  : "d-none"} onClick={calculateBMIHandler}>Submit</button>
    </div>
  );
}

export default Bmi;