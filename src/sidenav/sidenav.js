import React from "react";
import {Trelloenter} from "./trelloenter";
import "../sidenav/sidenav.css";
import {Chapter} from "./chapter1";
import {Bord} from "./chapter1";
import {List} from "./chapter1";
import {Card} from "./chapter1";
import {Menu} from "./chapter1";
import {Chaptertwo} from "./chapter2";
import {CreateBoard} from "./chapter2";
import {CustomizeBoard} from "./chapter2";
import {StartCollaborating} from "./chapter2";
import {Buildworkflow} from "./chapter2";
import { Link } from "react-router-dom";
export function Sidebar(){
    return(
        <>
    
<div className="row ">
  <div className=" col-lg-2 col-sm-6 ">
    <div className="overflow-y-auto sticky-top overflow-scroll sidenavbar_scrollbar ">
    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end sticky-bottom ">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link text-dark" href="#item-1">Getting started with Trello</a>
        <a className="nav-link text-dark" href="#item-2">Learn Trello board basics</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-2-1">What is a board?</a>
          <a className="nav-link ms-3 my-1" href="#item-2-2">What is a list?</a>
          <a className="nav-link ms-3 my-1" href="#item-2-3">What is a card?</a>
          <a className="nav-link ms-3 my-1" href="#item-2-4">What is the board menu?</a>
        </nav>
        <a className="nav-link text-dark" href="#item-3">Create your first project</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-3-1">Create a board</a>
          <a className="nav-link ms-3 my-1" href="#item-3-2">Customize your board</a>
          <a className="nav-link ms-3 my-1" href="#item-3-3">Start collaborating</a>
          <a className="nav-link ms-3 my-1" href="#item-3-4">Build a workflow</a>
          <a className="nav-link ms-3 my-1" href="#item-3-4">Add tasks and to-dos</a>
        </nav>
        <a className="nav-link text-black" href="#item-4">Onboard your team to Trello</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-4-1">What is a Workspace?</a>
          <a className="nav-link ms-3 my-1" href="#item-4-2">Set up a few boards</a>
          <a className="nav-link ms-3 my-1" href="#item-4-3">Tips for onboarding success</a>
          <a className="nav-link ms-3 my-1" href="#item-4-4">Gain cross team perspective</a>
        </nav>
        <a className="nav-link text-black" href="#item-5">Set permissions and admin controls
</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-5-1">Workspace administration</a>
          <a className="nav-link ms-3 my-1" href="#item-5-2">Member and guest permissions</a>
          <a className="nav-link ms-3 my-1" href="#item-5-3">User management with Trello Premium</a>
        </nav>
        <a className="nav-link text-black" href="#item-6">Learn Trello’s top tips and tricks</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-6-1">Card covers</a>
          <a className="nav-link ms-3 my-1" href="#item-6-2">Card separator</a>
          <a className="nav-link ms-3 my-1" href="#item-6-3">Emoji reaction</a>
          <a className="nav-link ms-3 my-1" href="#item-6-4">Stickers</a>
          <a className="nav-link ms-3 my-1" href="#item-6-5">Confetti celebration</a>
          <a className="nav-link ms-3 my-1" href="#item-6-6">Mark as done</a>
          <a className="nav-link ms-3 my-1" href="#item-6-7">Shortcuts</a>
        </nav>
      </nav>
    </nav></div>
  </div>

  <div className="col-sm-6 col-lg-10" >
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <Trelloenter/>
      </div>
       <div id="item-2">
        <Chapter/>
      </div>
      <div id="item-2-1">
        <Bord/>
      </div>
      <div id="item-2-2">
        <List/>
      </div>
      <div id="item-2-3">
        <Card/>
      </div>
      <div id="item-2-4">
        <Menu/>
      </div>
      
       <div id="item-3">
        <Chaptertwo/>
      </div>
      <div id="item-3-1">
        <CreateBoard/>
      </div>
      <div id="item-3-2">
        <CustomizeBoard/>
      </div>
      <div id="item-3-3">
        <StartCollaborating/>
      </div>
      <div id="item-3-4">
        <Buildworkflow/>
      </div>
      {/*<div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>...</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>...</p>
      </div> */}
    </div>
  </div>
</div>
        </>
    );
}