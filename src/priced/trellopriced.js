import React from "react";
import {Link} from "react-router-dom"
import '../priced/trelloprice.css';
export function Priced(){
    return(
        <>
        <div className="d-grid justify-content-center w-100">
            <h2 >Trello priced your way</h2>
            <p>Trusted by millions, Trello powers teams all around the world.</p>
            <Link to={"/Compareplane"}><button className="bg- rounded bg-info p-2 border-info text-light rounded border-none">compare plans</button></Link>
        </div>
        <div className="row justify-content-center">
            <div className=" col-lg-3 col-sm-5 box ">
            <p className="ps-3"><b>FREE</b></p>
            <span className="ps-3">$</span><h1  className="d-inline">0</h1><span>USD</span>
            <p className="text-secondary p-3">Free for your whole team</p>
            <p className="p-3">For individuals or teams looking to organize any project.</p>
            <button  className="p-3 rounded border-info but1">Get started</button>
            
            </div>
            <div className="col-lg-3 col-sm-5 box">
            <p><b>STANDARD</b></p>
            <span >$</span><h1  className="d-inline">5</h1><span>USD</span>
            <p className="text-secondary">Per user/month if billed annually ($6 billed monthly)</p>
            <p>For small teams that need to manage work and scale collaboration.</p>
            <button className="p-3 rounded border-info but1">sign up now</button><br/>
            <Link to={'/standered'}><a href="./standered.js" >Learn more about Standerd</a></Link>
            </div>
            <div className=" col-lg-3 col-sm-5 border-info box">
            <p><b>PREMIUM</b></p>
            <span >$</span><h1  className="d-inline">10</h1><span>USD</span>
            <p className="text-secondary">Per user/month if billed annually ($12.50 billed monthly)</p>
            <p>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
            <button className="p-3 rounded border-info but1">try for Free</button><br/>
            <Link to={'/Premium'}><a href="./premium.js" >Learn more about premium</a></Link>
            </div>
            {/* <div className=" col-lg-2 col-sm-5 box ">
            <p><b>ENTERPRISE</b></p>
            <span >$</span><h1  className="d-inline">17.50</h1><span>USD</span>
            <p className="text-secondary">Per user/month - billed annually ($210.00 annual price per user)</p>
            <p>For organizations that need to connect work across teams with more security and controls.</p>
            <div>
                <p>Est.cost for</p><input type="number" value={50} min={50} max={5000} >users</input> </div>
                <div>
                <input type="range" value={50} min={50} max={5000} ></input></div>
           
            <button className="p-3 rounded border-info but1">contact sales</button><br/>
            <a href="#" className="footer">Learn more about Enterprise</a>
            </div> */}
        </div>
        </>
    );
}