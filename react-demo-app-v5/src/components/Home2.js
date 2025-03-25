function Home2() {

    function lnkuseRefDemo1() {
      let msgText = "lnkuseRefDemo1";
      console.log(msgText);
    }
  
    function lnkuseStateDemo1() {
      let msgText = "lnkuseStateDemo1"
      console.log(msgText);
    }
  
    
    return (
      <>
            <div>
              <a href="#" onClick={lnkuseRefDemo1}>useRef demo 1</a>
              <p></p>
              <a href="#">useRef demo 2</a>
              <p></p>
              <a href="#" onClick={lnkuseStateDemo1}>useState demo 1</a>
              <p></p>
            </div>
            <div>
              [display info 1]
            </div>
        
      </>
    );
  }
  
  export default Home2;
  