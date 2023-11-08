import Student from "./Components/Student";
function App(){
  var sname="kavi";
  var scroll="087";
  return(
    <>
    {
        <Student name={sname} roll={scroll}/>

    }
    </>
  );
}
export default App
