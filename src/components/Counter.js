import {useState} from "react"; 
function Counter(){
    const [number,setNumber] =useState(0);
    
    const increase=()=>{
        setNumber(number+1);
    }
    const decrease=()=>{
        setNumber(number-1);
    }

    return(
        <>
        <div>
            <h2>{number}</h2>
        </div>
        <div>
            <button onClick={increase}>+</button>{" "}<button onClick={decrease}>-</button>
        </div>           
        </>
    )

}
export default Counter;