

function App() {

  function Header() {
    return(
      <h2>React Demo App 2.1</h2>
    )
  }

  const Footer = () => {
    return(
      <p>Footer @ 2025</p>
    )
  }
  return (
    <>
      <Header/>
      <div>
        <a href="#">lnkExample1</a>
        <p></p>
        <a href="#">lnkExample2</a>
        <p></p>
        <button>btnExample1</button>
        <p></p>
      </div>
      <Footer/>
    </>
  );
}

export default App;
