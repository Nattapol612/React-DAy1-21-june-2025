import "./Hello.css";
import "./Counter.jsx";
export default function Hello({name ="joe",surname = "jamal", weight = "40"}) {
    
    return( 
        <>
            <img src= "1100-Lamborghini-Revuelto-0011.jpg" width={200}/>
            <h1>Hello,{name} 
                {surname} 
                 {weight} kg.  
            </h1>
            <h2> 


            </h2>

        </>
    
    );
    

}
