import React from "react";
import work from "../images/workspace.JPG";
import bord from "../images/bord.JPG";
import list from "../images/list.JPG";
import card from "../images/card.JPG";
import menu from "../images/menu.JPG";
export function Chapter(){
    return(
        <>
        <div className="row justify-content-center">
        <div className="col-sm-10">
        <p>chapter1</p>
        <h1>Learn Trello board basics</h1>
        <p>Getting started with Trello is easy, in this chapter you will learn about the fundamental components of Trello, boards, lists, cards, and more.</p>
        <img src={work} alt=".." className="w-50"></img>
        <p>
        <strong>Welcome to Trello!</strong><br/>
        Trello is the visual work management tool that empowers teams to ideate, plan, manage, and celebrate their work together in a collaborative, productive, and organized way.

        Whether you and your team are starting something new or trying to get more organized with your existing work, Trello adapts to any project. It helps you simplify and standardize your team’s work process in an intuitive way. But don’t let its simplicity fool you! Trello is user-friendly, yet still able to handle your team’s most robust projects.

        This is a quick overview of the things you need to know when you are just getting started with your first project on Trello.

        This Guide is geared towards Trello Free, Trello Standard, and Trello Premium use cases and features. If you are an enterprise, go to the Trello Enterprise Guide.
        </p></div></div>
        </>
    );
}

export function Bord(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>What is a board?</h1>
            <p>A board (A) represents a place to keep track of information — often for large projects, teams, or workflows. Whether you are launching a new website, tracking sales, or planning your next office party, a Trello board is the place to organize tasks, all the little details, and most importantly—collaborate with your colleagues.</p>
            <img src={bord} alt="..." className="w-50"/></div>
        </div>
        </>
    );
}

export function List(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>What is a list?</h1>
            <p>Lists (B) keep cards, or specific tasks or pieces of information, organized in their various stages of progress. Lists can be used to create a workflow where cards are moved across each step in the process from start to finish, or simply act as a place to keep track of ideas and information. There’s no limit to the number of lists you can add to a board, and they can be arranged and titled however you’d like.</p>
            <img src={list} alt="..." className="w-50"/></div>
        </div>
        </>
    );
}

export function Card(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>What is a card?</h1>
            <p>The smallest, but most detailed unit of a board is a card (C). Cards are used to represent tasks and ideas. A card can be something that needs to get done, like a blog post to be written, or something that needs to be remembered, like company vacation policies. Just click “Add a card…” at the bottom of any list to create a new card, and give it a name like “Hire a new marketing manager” or “Write a blog post.”

Cards can be customized to hold a wide variety of useful information by clicking on them. Drag and drop cards across lists to show progress. There’s no limit to the number of cards you can add to a board. You will learn more about this in the next chapter.</p>
            <img src={card} alt="..." className="w-50"/></div>
        </div>
        </>
    );
}

export function Menu(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>What is the board menu?</h1>
            <p>On the right side of your Trello board is the menu (D)—the mission control center for your board. The menu is where you manage members' board permissions, control settings, search cards, enable Power-Ups, and create automations. You can also see all of the activity that has taken place on a board in the menu’s activity feed. Take some time to check out everything the menu has to offer.</p>
            <img src={menu} alt="..." className="w-50"/>
            <p>Sounds pretty simple, right? Let’s get started by creating your first project, but first, you will need an initiative or goal to work on. Need some ideas? Here’s a little inspiration.</p></div>
        </div>
        </>
    );
}