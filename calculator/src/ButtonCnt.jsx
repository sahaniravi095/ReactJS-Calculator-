
import  styles from './App.module.css'
const ButtonCnt =({onButtonClick})=>{
 let  buttonNames =["C","1","2","+", "3", "4", "-", "5", "6", "*", "7","8","/","=","9","0","."];
 return(

 <div className={styles.btn}>
    {buttonNames.map((buttonNames)=>(
    <button className={styles.btn1} onClick={()=>onButtonClick(buttonNames)}>{buttonNames}</button>
    ))}

</div>   
 );
}
export default ButtonCnt;