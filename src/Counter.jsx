import './Hello.css'
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");
    function onTextchange(event){
        console.log("this Function is called|"+event.target.value);
        console.error("this is error")
        setValue(event.target.value);
    }
    return(<>
    <input value={value} onChange={(event)=>onTextchange(event)} />
    <p>you type {value.length} characters </p>
    <p>{value} celcius to {value*1.8+32} Farenheit</p>
    <p>Kilometers to {value*0.62137119} Miles</p>
    <button onClick={()=>setCount(count+1)}>
        <img src= "1100-Lamborghini-Revuelto-0011.jpg" width={200}/>
    </button>
     <button onClick={()=>setCount(count-1)}>
        <img src= "jesko.jpg" width={200}/>
    </button>
     <button onClick={()=>setCount(count*0)}>
        <img src= "1100-Lamborghini-Revuelto-0011.jpg" width={200}/>
    </button>
    <p>You clicked {count} times

    </p>
    </>);






}