import { useState } from "react";
function Item({name}){
    const[pack,setPack]=useState(0);
    function RandomDice(){


        let num=Math.round(Math.random()*6)+1;
        setPack(num);
    }
    if(pack%6==0)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚀</li>);
    if(pack%6==1)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚁</li>);
   if(pack%6==2)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚂</li>);
    if(pack%6==3)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚃</li>);
    if(pack%6==4)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚄</li>);
    if(pack%6==5)
    return (<li onClick ={()=>RandomDice(pack+1)}>{name}⚅</li>);


}
export default function Backpact(){
    const items=["Snacks","water,","Cola","Flash light","Stick","Ball"]
    const filterList=items.filter(i=>i.includes("g"));
    return(<>
    <h1>Backpack List</h1>
    <ol>
        {items.map(i=><Item name={i}/>)}
        {filterList.map(i=><Item name={i}/>)}

    </ol>
    </>);
}
