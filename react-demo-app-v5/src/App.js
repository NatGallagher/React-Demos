import {HashRouter, Routes, Route} from "react-router-dom"
import About from "./components/About"
import Home2 from "./components/Home2"
import Header from "./components/Header";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Page1 from "./components/Page1"

function App() {

  

  
  return (
    <>
    
      <HashRouter> 
      <NavBar/> 
      <Header/>          
      <Routes>      
        <Route path="/" element={<Home2/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/page1" element={<Page1/>}/>
      </Routes>
    </HashRouter>    

      <Footer/>
    </>
  );
}

export default App;
