import { useState } from "react";
import Header from "./components/Header";
import Songs from "./components/Songs";
import "./index.css";
import Parent from "./Parent";
import Child from "./Child";
function App() {
  const [word, setWord] = useState();

  function handleText(e){
    setWord(e.target.value);
  }

  return (
    <>
      <Header/>
      {/* <Songs/>
      <input placeholder="Input" onChange={(e)=>handleText(e)}/>
      <p>{word}</p> */}
      <Parent>
        <Child/>
      </Parent>
    </>
  );
}

export default App;
