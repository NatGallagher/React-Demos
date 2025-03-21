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

  function Header() {
    return(
      <>
        <h1>React Demo app v3</h1>
      </>
    )
  }

  const Footer = () => {
    return(
      <>
        <p>Footer @ 2025</p>
      </>
    )
  }
  return (
    <>
    <div>
      <Header/>
      <p></p>
      <a href="#" onClick={linkDemo1}>link Demo 1</a>
      <p></p>
      <a href="#" onClick={linkDemo2}>link Demo 2</a>
      <p></p>
      <button onClick={btnDemo1}>Button Demo 1</button>
      <p>
        <Footer/>
      </p>
    </div>
    </>
  );
}

export default App;
