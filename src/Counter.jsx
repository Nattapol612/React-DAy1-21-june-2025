import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return(<>
    <button onClick={()=>setCount(count+1)}>
        <img src= "1100-Lamborghini-Revuelto-0011.jpg" width={200}/>
    </button>
     <button onClick={()=>setCount(count-1)}>
        <img src= "jesko.jpg" width={200}/>
    </button>
     <button onClick={()=>setCount(count+1)}>
        <img src= "1100-Lamborghini-Revuelto-0011.jpg" width={200}/>
    </button>
    <p>You clicked {count} times

    </p>
    </>);






}