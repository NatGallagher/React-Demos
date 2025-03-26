import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <HashRouter>
        <NavBar/>
        <Header/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </HashRouter>
    <Footer/>         
    </>
  );
}

export default App;
