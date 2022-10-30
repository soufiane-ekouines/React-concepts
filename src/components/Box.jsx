import React from "react";

export const Box = ({name,onClicked}) =>{
    const printHello = () =>{
        console.log('hello from box')
    }
    return(
        <div onClick={onClicked}>
            hi props i'm {name}
            <input type='text' onChange={printHello}/>
        </div>
    )
}