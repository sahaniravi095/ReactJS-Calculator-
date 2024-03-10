
import Display from './component/Display'
import  styles from './App.module.css'
import ButtonCnt from './ButtonCnt'
import { useState } from 'react'

function App() {
  const [calval, setcalval]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==="C"){
      setcalval("");
    }
    else if(buttonText==="="){
      const result =eval(calval);
      setcalval(result);
    }
    else{
      const newDisplayValue=calval+buttonText;
      setcalval(newDisplayValue);
    }
  }

  return (
    <>
     <div className={styles.calculator}>
      <Display displayValue={calval}></Display>
      <ButtonCnt onButtonClick ={onButtonClick} ></ButtonCnt>
     </div>
    </>
  )
}

export default App
