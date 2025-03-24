function App() {

  function Header() {
    return(
      <h2>Demo react app v1.1</h2>
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
            <a href="#">useRef demo 1</a><p></p>
            <a href="#">useState demo 1</a><p></p>
          </div>
          <div>
            [display info]
          </div>
          <Footer/>
    </>
  );
}

export default App;