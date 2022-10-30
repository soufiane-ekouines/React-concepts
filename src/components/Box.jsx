import React,{useEffect} from "react";

export const Box = ({name,onClicked}) =>{

    // start whene the components created || with name (start every name change value)
    useEffect(() => {
        console.log('we are here');
    }, [name])

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