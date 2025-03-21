import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {

  const linkDemo1 = () => {
    console.log("linkDemo1");
  }
  const linkDemo2 = () => {
    console.log("linkDemo2");
  }
  const btnDemo1 = () => {
    console.log("btnDemo1");
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
        <Footer title="Footer" year="2025"/>
      </p>
    </div>
    </>
  );
}

export default App;
