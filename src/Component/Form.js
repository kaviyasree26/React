import '../Asset/Css/Style.css';
//import {Award} from 'lucide-react';
const Form=()=>
{
    return(
        <>
       <center> <form className="form-container">
          <h1 align="center">STUDENT DETAILS</h1>
          <label>Name</label>
          <input type="text" placeholder="Name" className="fx1"></input>
          <label>Email</label>
          <input type="email" placeholder="Email" className="fx1"></input>
          <label>Phone</label>
          <input type="number" placeholder="number" className="fx1"></input>
          <label>Username</label>
          <input type="text" placeholder="Username" className="fx1"></input>
          <label>Password</label>
          <input type="password" placeholder="Password" className="fx1"></input>
          <input type="submit"value="Register" className="fx2"></input>
        </form></center>
        </>

    )
}
export default Form;