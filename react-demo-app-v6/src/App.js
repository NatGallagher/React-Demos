import {HashRouter, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"

function App() {

  return (
   <>
    <HashRouter>         
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </HashRouter>    
   </>
  );
}

export default App;
