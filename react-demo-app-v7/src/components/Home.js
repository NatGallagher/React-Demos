function Home() {

    function useRefDemo1() {
      let msgText = "useRefDemo1";
      console.log(msgText);
    }
  
    function useStateDemo1() {
      let msgText = "useRefDemo1";
      console.log(msgText);
    }
  
    return (
      <>
        <a href="#" onClick={useRefDemo1}>useRefDemo1</a>
        <p></p>
        <a href="#" onClick={useStateDemo1}>useStateDemo1</a>
        <p></p>
        <div>
          [Deploy Test]
        </div>
      </>
    );
  }
  
  export default Home;
  