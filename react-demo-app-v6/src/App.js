import {HashRouter, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Page1 from "./components/Page1"

function App() {

  return (
   <>
    <HashRouter> 
      <NavBar/>
      <Header/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/page1" element={<Page1/>}/>
      </Routes>
    </HashRouter> 
    <Footer/>   
   </>
  );
}

export default App;
