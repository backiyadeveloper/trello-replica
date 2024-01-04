import React from "react";
export function Ticket(){
   //  const sheet=()=>{
   //     var number= prompt("how many sheets");
   //     document.getElementById("boksheets").innerText=number;
   //     if(number!=null){
   //      var pay=number*200;
   //      document.getElementById("payment").innerText=pay;
   //     }
   // }
     return (
        <>
        {/* <button id="book" onClick={sheet}>book tickets</button>
        <h1>booking details:</h1>
        <h3>movie name</h3>
        <h3>number of booking is <span id="booksheets"></span></h3>
        <h3>total payment <span id="payment"></span></h3> */}
      <div>
      <center> <h1> Student Login Form </h1> </center>   
    <form>  
        <div className="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  <br/> <br/>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>   <br/> <br/>
            <button type="submit">Login</button>    <br/> <br/>
            <input type="checkbox" checked="checked"/> Remember me    <br/> <br/>
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>   
    </form>     
      </div>
        </>
     );
}