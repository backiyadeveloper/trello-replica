import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faBagShopping,faShareNodes,faMugHot,faWandMagicSparkles} from "@fortawesome/free-solid-svg-icons";
export function Trelloenter(){
    return(
        <>
        <div className="row">
            <div className="text-center col-sm-10">
        <h2>Getting started with Trello</h2>
        <p>Welcome to Trello! This guide will walk you through everything you need to know about using Trello, from setting up your first project to equipping your team with all of the tools they need to get the job done. Each chapter includes easy to follow steps, tips, and templates that will turn you into a Trello champion in no time.</p>
        <button className="rounded bg-info text-white">go to guide</button></div>
        </div>
        <div className="row justify-content-center">
            <h5 className="text-center">Be a Trello expert in 9 easy steps</h5>
            <div className="col-sm-6">
               <FontAwesomeIcon icon={faHouse} /> 
                <p>chater 1</p>
               <h5>Learn Trello board basics</h5>
            </div>
            <div  className="col-sm-6">
            <FontAwesomeIcon icon={faBagShopping} />
                <p>chater 2</p>
                <h5>Create your first project</h5>
            </div>
            <div className="col-sm-6">
            <FontAwesomeIcon icon={faShareNodes} />
                <p>chater 3</p>
                <h5>Onboard your team to Trello</h5>
            </div>
            <div className="col-sm-6">
            <FontAwesomeIcon icon={faMugHot} />
                <p>chater 4</p>
                <h5>Set permissions and admin controls</h5>
            </div>
            <div className="col-sm-6">
            <FontAwesomeIcon icon={faWandMagicSparkles} />
                <p>chater 5</p>
                <h5>Learn Trello’s top tips and tricks</h5>
            </div>

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
        </div>
        
        </>
    );
}