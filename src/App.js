import { Box } from "./components/Box";
import { Cart } from "./components/Card";

function App() {
  const onBoxClicked = () =>{
    console.log('hello from app')
  }
  return (
    <div className="App">
      <Cart name="soufiane"/>
      
      <Box name={'ekouines'} onClicked={onBoxClicked}/>
    </div>
  );
}

export default App;
