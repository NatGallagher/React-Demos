import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home2 from "./components/Home2"
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {

  

  
  return (
    <>
    <Header/>
      <BrowserRouter>            
      <Routes>      
        <Route path="/" element={<Home2/>}/>
      </Routes>
    </BrowserRouter>    

      <Footer/>
    </>
  );
}

export default App;
