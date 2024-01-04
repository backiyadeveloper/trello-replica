import React from "react";
import pic1 from '../images/Boards.png';
import pic2 from '../images/card1.png';
import pic3 from '../images/meeting agenta.png';
import "../componenet1/productivity.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
function Productivity(){
  
    const events=()=>{
            document.getElementById("button1").className="bg-white  bordershad1 ms-lg-5 rounded";
            document.getElementById("button3").className="pdiv1 ms-lg-5 ";
            document.getElementById("button2").className=" pdiv1 ms-lg-5";
    }
    const events1=()=>{
            document.getElementById("button2").className="bg-white  bordershad1 ms-lg-5 rounded";
            document.getElementById("button1").className="pdiv1 ms-lg-5";
            document.getElementById("button3").className="pdiv1 ms-lg-5";
  
   }
    const events2=()=>{
              document.getElementById("button3").className="bg-white  bordershad1 ms-lg-5 rounded";
              document.getElementById("button2").className=" pdiv1 ms-lg-5";
              document.getElementById("button1").className="pdiv1 ms-lg-5";
    }
  
    return (
        <>
        <div className="col-12  pdiv1">
        <div className="pdiv1">
        <p>TRELLO 101</p>
        <h2>A productivity powerhouse</h2>
        <p>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <Link to={'/Sidebar'}> <a href="/sidebar">guide for getting started.</a></Link></p>
        <FontAwesomeIcon icon={faHeart} />
        </div>


       
<div className="row ">
       <div className=" col-lg-4 col-sm-12 ">
            <p className="ms-lg-5  " id="button1" onClick={events} data-bs-target="#carouselExample" data-bs-slide-to="0" ><b>Boards:</b><br/>
            Trello boards keep tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"
        </p>
        
        <p className="ms-lg-5"  id="button2" onClick={events1}data-bs-target="#carouselExample" data-bs-slide-to="1"><b>Lists:</b><br/>The different stages of a task. Start as simple as To Do, Doing or Done-or build a workflow custom fit to your team's needs. There's no wrong way to Trello.</p>
        <p className="ms-lg-5"  id="button3" onClick={events2} data-bs-target="#carouselExample" data-bs-slide-to="2"><b>Cards;</b><br/>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
        </div>
        <div className="col-lg-8  col-sm-12">
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className=" w-75 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className=" w-75 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={pic3} className=" w-75 " alt="..."/>
    </div>
    </div>
    </div>
    </div>
    </div>

   </div> 
      </>
    );
}
export default Productivity;