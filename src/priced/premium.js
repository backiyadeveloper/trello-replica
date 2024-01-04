import React from "react";
import premium from "../images/Captureprimium.JPG";
import pic1 from '../images/Captureboard.JPG';
import pic2 from '../images/powerful.PNG';
import pic3 from '../images/autmation.PNG';
import "../componenet1/productivity.css";
import stand from "../images/standerd image.png";
export function Premium(){
  
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
        <div className="w-100">
        <div className="row justify-content-center">
        <img src={premium} alt="imagepic" className=" col-lg-4 col-sm-5 order-sm-0 order-lg-1"></img>
            <div className="col-lg-4 col-sm-5">
            <h2>Trello Premium</h2>
            <p>Make every project a success. Work out of our signature Trello boards- or with timelines, calendars, and more. Plus admin controls.<span className="bold"> Just $10 a month.</span> </p>
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
        <h2>Make every project a success with Trello Premium</h2>
        </div><br/>

        <div className="row ">
       <div className=" col-lg-4 col-sm-12 ">
            <p className="ms-lg-5  " id="button1" onClick={events} data-bs-target="#carouselExample" data-bs-slide-to="0" ><b>GO BEYOND BOARD WITH VIEWS</b><br/>
            Work out of Trello's signature boards -or out of  Timeline, Table,Calendar,and more.
        </p>
        
        <p className="ms-lg-5"  id="button2" onClick={events1}data-bs-target="#carouselExample" data-bs-slide-to="1"><b>Powerful Collabaration features</b><br/>Cross off tasks more effectively across the whole team with custom Field and advanced checklists.</p>
        <p className="ms-lg-5"  id="button3" onClick={events2} data-bs-target="#carouselExample" data-bs-slide-to="2"><b>UNLIMITED AUTOMATION</b><br/>Unlock limitless automation to add teammates to tasks,move cards,set dates,and much more, without even lifting a finger.No coding necessary!</p>
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
<br/>

<div className="d-lg-flex justify-content-center align-items-center signcolor">
<div className="col-6">
    <h1 className="text-white">With Trello Standard you’ll get everything you love in our free version, plus:
</h1>
<button className="bg-white buttun1 rounded text-primary">sign up today</button>
</div>
<div>
<p className="text-white ">Views-work out of a Timeline,Table,Calendar,and more</p>
<p className=" text-white">Custom Fields,advanced checklists,admin controls</p></div>
<div>
<p className="text-white ms-lg-5">Data export</p>
<p className="text-white ms-lg-5">Unlimited storage(250MB/file)</p></div>
<div>
<p className="text-white ms-lg-5">Unlimited boards and automations</p>
<p className="text-white ms-lg-5">Priority support</p>
</div>
<br/>
</div><br/><br/>

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


<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What are the benifits of Trello Premium?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      With Trello Premium, teams can track and visualize multiple projects in several ways with Board, Table, Timeline, and Calendar views. Trello Premium includes privacy controls and other administrative tools that are helpful to businesses that want to take greater control of their boards and data.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        How long is Trello Premium trial?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      All users can enroll their Workspace in a free 14 day trial of Trello Premium. With that trial, users within your Workspace can create unlimited Trello boards with unlimited options for automation. Your team can test-drive the convenience and utility of visualizing your work in Table, Calendar, and Timeline views, along with access to other Premium features.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        How many boards are included in Trelo Premium?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
      All users with a Trello Premium Workspace will get access to create unlimited Trello boards and unlimited Workspace automation commands.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
       How does Trello Premium billing work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
      <div class="accordion-body">
      When you upgrade your Workspace to Trello Premium, you have the option to choose between a monthly or annual billing plan. Annual billing is paid in advance and gives a discount for each member as compared to monthly billing.
      </div>
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
</div>

        </div>
        </>
    );
}