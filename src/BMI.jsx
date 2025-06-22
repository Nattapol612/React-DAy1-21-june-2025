import './nice.css';
import { useState,useRef } from "react";
function BmiText({bmi}){
    if(bmi<18.5) return(<><h1>UnderWeight <img src="ChatGPT Image 22 มิ.ย. 2568 15_14_49.png" width={200}/></h1>
    </>);
    if(bmi>30) return(<><h1>Overweight <img src="ChatGPT Image 22 มิ.ย. 2568 15_04_17.png" width={200}/>  </h1> </>); 
    return (<><h1>Normal<img src="ChatGPT Image 22 มิ.ย. 2568 15_22_11.png"width={200}/></h1></>);   
}
export default function MMI(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const[bmi,setBmi]=useState(0);
    function calBMI(){
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w/(h*h));
    }
    return (<>

    <h1>BMI Calculator</h1>
    Weight <input ref={w_inputRef}/> Kg. <br/>
    Height <input ref ={h_inputRef}/> Cm. <br/>
    <button onClick={calBMI}> Calculate! </button><br/>
    Bmi:{bmi.toFixed(2)}
    <BmiText bmi={bmi}/>
    </>);
}