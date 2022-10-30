import React,{ useRef } from "react";

export const Cart = (props) =>{
    
    //to get or change (styles...) the object
    const divRef = useRef();

    const  changeStyles = () =>{
        console.log(divRef.current.style.color = "red");
    }
    return(
    <div ref={ divRef } onClick={changeStyles}>
        I'm {props.name}
    </div>
    )
};

