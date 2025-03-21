import { useRef } from "react"

import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {

//-- useState = creat in-memory data accessable by all fnctions/components on the current component/page
const [strMsg, setStrMsg] = useState("")
const divDisplay = useRef("") //reference, select manipulate jsx element ie: DOM


const linkDemo1 = () => {
    let msgText = "linkDemo1"
    console.log(msgText);
    divDisplay.current.innerText = msgText;

  }

 
  //const divDisplay = document.getElementById("div-display");
  //validate if divDisplay is found
  //divDisplay.innerText = 
  //react will create/generate the DOM document element code


  const linkDemo2 = () => {
    let msgText = "linkDemo2"
    console.log(msgText);
    divDisplay.current.innerText = msgText;

  }
  const btnDemo1 = () => {
    let msgText = "btnDemo1"
    console.log(msgText);
    divDisplay.current.innerText = msgText;

  }

  //components

 

  
  return (
    <>
    <div>
      <Header title="React Demo App v3"/>
      <p></p>
      <a href="#" onClick={linkDemo1}>link Demo 1</a>
      <p></p>
      <a href="#" onClick={linkDemo2}>link Demo 2</a>
      <p></p>
      <button onClick={btnDemo1}>Button Demo 1</button>
      <p>
        <Footer title="Footer" year={2025}/>
      </p>
    </div>
    <div id="div-display" ref={divDisplay}>
      </div>
    </>
  );
}

export default App;
