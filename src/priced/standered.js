import React from "react";
import pic1 from '../images/unlimite.PNG';
import pic2 from '../images/powerful.PNG';
import pic3 from '../images/autmation.PNG';
import standpic from "../images/standerdimg.png";
import "../componenet1/productivity.css";
import stand from "../images/standerd image.png";
export function Standerd(){
  
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
      
    return(
        <>
        <div className="parentdiv">
        <div className="row justify-content-center">
        <img src={standpic} alt="imagepic" className=" col-lg-4 col-sm-5 order-sm-0 order-lg-1"></img>
            <div className="col-lg-4 col-sm-5">
            <h2>Trello Standard</h2>
            <p>Make teamwork less work with unlimited boards, collaboration features, and more automation for just<span className="bold">$5 a month.</span> </p>
            <button className="bg-info buttun1 text-white rounded border-none p-2">sign up</button>
            <a href="#"> or log in!</a></div>
               
        </div><br/><br/>
        <div className="row col-12">
            <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
               <h1>2M+</h1>
               <h3>teams</h3>
               <p>around the world use Trello to track their daily to-dos and projects</p>
            </div>
            <div className="col-lg-3 col-sm-6">
               <h1>80%</h1>
               <h3>of Fortune 500</h3>
               <p>use Trello to manage work across teams and departments</p>
            </div>
            <div className="col-lg-3 col-sm-6">
               <h1>#1</h1>
               <h3>in Customer Satisfaction*</h3>
               <p>*G2 Grid® Report, Project Management SaaS, ranking 150+ tools</p>
            </div>
            </div>
        </div>

        <div className="col-12  pdiv1">
        <div className="pdiv1 col-6 ms-5">
        <h2>Maximize project productivity with Trello Standard</h2>
        </div><br/>


       
<div className="row ">
       <div className=" col-lg-4 col-sm-12 ">
            <p className="ms-lg-5  " id="button1" onClick={events} data-bs-target="#carouselExample" data-bs-slide-to="0" ><b>Unlimited Boards</b><br/>
            Organization for every projects frm HR to IT.Access unlimited boards with trello standard.
        </p>
        
        <p className="ms-lg-5"  id="button2" onClick={events1}data-bs-target="#carouselExample" data-bs-slide-to="1"><b>Powerful Collabaration features</b><br/>Cross off tasks more effectively across the whole team with custom Field and advanced checklists.</p>
        <p className="ms-lg-5"  id="button3" onClick={events2} data-bs-target="#carouselExample" data-bs-slide-to="2"><b>More automation</b><br/>Run commands up to 1000 times a month:Move cards, set dates,and much more,without even lifting a finger.</p>
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
<br/><br/>
<div className="d-lg-flex justify-content-center align-items-center signcolor">
<div className="col-6">
    <h1 className="text-white">With Trello Standard you’ll get everything you love in our free version, plus:
</h1>
<button className="bg-white buttun1 rounded text-primary">sign up today</button>
</div>
<div>
<p className="text-white ">Unlimited boards</p>
<p className=" text-white">Custom Fields</p></div>
<div>
<p className="text-white ms-lg-5">Unlimited storage(250MB/file)</p>
<p className="text-white ms-lg-5">Advanced checklists</p></div><br/>
</div><br/><br/>

{/* <div className="d-lg-flex justify-content-center container-fluid">
  <img src={stand} alt="...." className="border-rounded img-fluid"></img>
  <div className="ms-lg-5 w-lg-50 container-fluid">
    <h1>Preview all these productive upgrades</h1>
    <p>Take a 20-minute video tour of Trello Standard.</p>
    <button className="border-info rounded">Watch webinar</button>
  </div>
</div> */}

<div className=" text-center m-1 p-5">
                <div className="d-flex flex-column gap-3">
                <h4 className="text-center text-dark p-5 ">Join over 2,000,000 teams worldwide that are using Trello to get more done.</h4>
                <div className=""><img src={require('../images/coinbase.JPG')} className="col-3"></img>
                <img src={require('../images/johndeer.JPG')} className="col-2"></img>
                <img src={require('../images/grand.JPG')} className="col-5"></img>
                </div>
                <div><img src={require('../images/visa.JPG')}className="col-3"></img>
                <img src={require('../images/zoom.JPG')} className="col-2"></img>
                </div>
                </div>
</div>


<div className="footdiv row justify-content-center ">
  <div className="col-6 ">
  <h1>Haven't tried Trello before?
</h1>
<p>Sign up for free and join over 2M teams worldwide who are using Trello to get more done.</p>
<form>
  <input type="text" placeholder="Email" id="" name="" className="buttun1 rounded"></input>
  <button className="ms-4 buttun1 rounded">Sign Up</button>
</form>
</div>
</div></div>
        </>
    );
} 