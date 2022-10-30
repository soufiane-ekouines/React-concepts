import { useEffect, useState } from "react";
import { Box } from "./components/Box";
import { Cart } from "./components/Card";

function App() {

  //usestate to set name 
  const [name,setName] = useState('hello boob');

  const onBoxClicked = () =>{
    console.log('hello from app')
  }

  // start whene the app start
  useEffect( () => {

    setInterval(() => {
      setName('Bob'+Math.random());
    },1000)
    // with jaust return is to clean up 
  },[]);

  return (
    <div className="App">
      <Cart name="soufiane"/>
      
      <Box name={name} onClicked={onBoxClicked}/>
    </div>
  );
}

export default App;
