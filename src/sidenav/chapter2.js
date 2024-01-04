import React from "react";
import createbord from "../images/createbord.JPG";
import createb2 from "../images/createb2.JPG";
import customize from "../images/customize.JPG";
import collabrate from "../images/collabrate.JPG";
import build from "../images/build.JPG";
import add from "../images/add.JPG";
export function Chaptertwo(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
        <p>chapter</p>
        <h1>Create your first project</h1>
        <p>Trello is flexible and fast enough to manage any sized project from start to finish. Learn how to build your first board and start moving work forward.</p>
        <h5>Build your first project in Trello</h5>
        <p>As with any project, you need to manage a lot of information, track task statuses, and pull in the right stakeholders at every phase of the project. The objective is to move forward at a steady pace and ensure you can deliver on time and within budget—all while keeping a smile on your face.

        Trello can help you every step of the way. Now that we have the basics down for setting up a Trello board, it’s time to get the ball rolling on your first project.</p> </div>
        </div>
        </>
    );
}

export function CreateBoard(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
        <h2>Create a board</h2>
        <p>Structuring a project with all the members, ideas, tasks, and due dates and optimizing it for team collaboration can be overwhelming. Thankfully, you can get a fresh start with a Trello board where you can organize everything to meet your needs and be successful.</p>
        <img src={createbord} alt="..." className="w-50"/>
        <li>From the team’s Workspace tab, click “Create new board” or click the plus button (+) in the Trello header directly to the left of your name, and select “Create Board”.</li>
        <li>From the team’s Workspace tab, click “Create new board” or click the plus button (+) in the Trello header directly to the left of your name, and select “Create Board”.</li>
        <img src={createb2} alt="..." className="w-50"/>
        <p>Your project data and information are your most valuable assets. As you work through creating a new Trello board, you will have options for adjusting your privacy settings.</p>
        <li>When you are creating a board, the default setting is ‘Workspace Visible’ which means any members of that Workspace can view, join, and edit cards.</li>
        <li>If you change your settings to Private, only members of that specific board can see it. Typically, you want to default to Private if you are working on a more restrictive project and do not want other team members to access it. It is great for 1:1 boards, personal to do's boards or boards shared with customers.</li>
        <li>Public boards allow anyone with the link to the board to see it. Public boards are ranked on search engines such as Google, meaning that any information on this specific board will be accessible to anyone on the internet. This setting can be used for a public project or for product roadmap that is open to public feedback. Just like other board settings, you can granularly choose who can comment, add or remove members, and edit and join the board.</li></div>
        </div>
        </>
    );
}
export function CustomizeBoard(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
        <h1>Customize your board</h1>
        <p>No two workflows are alike, so why not give each board a unique look and feel? In the spirit of fun and flexibility, we let you customize your board background to reflect your team’s unique personality.</p>
        <img src={customize} alt=".." className="w-50"/>
        <p>You can pick one of our basic colors, upload your own personal image*, or pick a picture from Unsplash’s huge library of photos for beautiful and unique board backgrounds. You can always change a board background at any time from the board’s menu.</p></div>
        </div>
        </>
    );
}
export function StartCollaborating(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>Start collaborating</h1>
            <p>Whether a member is in charge of a project or only checks in occasionally for project status updates, ensuring all team members are on the same page results in a better project collaboration experience.

            Invite members to the board so that they can be assigned to tasks and collaborate on the board.</p>
            <img src={collabrate} alt="" className="w-50"></img>
            <ol>
                <li>From the top of the board, click “Invite” and select a member of your team to add to your board, or invite members by their email address or name.
                </li>
                <li>At the bottom of the Invite menu you can get an easy-to-share invite link to your board at the bottom of the Invite menu. Drop the special link in a Slack channel or email it to external stakeholders to start collaborating. To be even fancier, you can download a QR code for people to scan to invite them to your board.</li>
            </ol>
            <h4>Set member permissions</h4>
            <p>Set member permissions to define roles transparently. Member permissions gives you granular control to give the right access to the right person. Become familiar with the following user settings to make sure the right information can be controlled by the right people:
            </p>
            <p><b>Normal:</b> can view and edit cards, they can also edit some board permissions depending on what settings you put together. Great for workspace members actively working on a project.</p>
            <p><b>Admin: </b>can view and edit cards, remove members and change all the settings of the board. Great for project leaders or managers who have full control over the project.</p>
            <p><b>Observer*: </b>can access content displayed on a board, they can't edit cards but you can allow them to comment, emoji react and engage to the level you define with the board. Great for boards you want to inform people on such as clients, managers, third party, etc</p>
        </div></div>
        </>
    );
}

export function Buildworkflow(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-6">
            <h1>Build a workflow</h1>
            <p>Lists in Trello help you organize your cards by status. They can represent different things like a collection of ideas or tasks within a larger project. However, whether it’s basic Kanban, a sales pipeline, a marketing calendar, or robust project management, what matters most is establishing a workflow for the way your team works.</p>
            <img src={build} alt="" className="w-50"/>
            <ol>
                <li>Click "Add a list" to add your first list to your board and title it to represent the stage or information that it will hold. List names can be as simple as steps like “To Do,” “Doing,” and “Done” or as detailed as needed for the work you are doing. Remember: Trello is truly customizable to your unique needs so just go ahead and name your lists anything you like!</li>
                <li>Add as many lists to your board as you need to build out a workflow.</li>
            </ol>
        </div></div>
        </>
    );
}

export function AddTasks(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-sm-8">
            <h1>Add tasks and to-dos</h1>
            <p>As a fundamental unit of a board, cards are used to represent tasks and ideas. It can be used for something that needs to get done like a customer support issue, a new design, a blog post, or something project-related that you need to be reminded of.

            Cards can be customized to hold a wide variety of useful information by clicking on them. Drag and drop cards across lists to show progress. There’s no limit to the number of cards you can add to a board.</p>
            <img src={add} alt="..." className="w-50"></img>
            <ol>
                <li>Add cards for each task that needs to be completed by clicking “Add A Card” in the first list. Keep card titles short to make it easier to scan and see the status of each card on the board.</li>
                <li>So that everyone has a clear understanding of what needs to get done, click on cards to add more information such as:</li>
            </ol>
            <li>Descriptions</li>
            <li>Due dates</li>
            <li>Members</li>
            <li>Checklists</li>
            <li>Attachments</li>
            <li>Comments</li>
            </div>
        </div>
        </>
    );
}