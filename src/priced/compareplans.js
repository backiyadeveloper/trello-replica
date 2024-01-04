import React from "react";
import {Link} from "react-router-dom"
import '../priced/trelloprice.css';
export function Compareplane(){
    return(
        <>
        <div className="d-grid justify-content-center w-100">
            <h2 >Trello priced your way</h2>
            <p>Trusted by millions, Trello powers teams all around the world.</p>
            <button className="bg- rounded bg-info p-2 border-info text-light rounded border-none">compare plans</button>
        </div>
        <div className="row justify-content-center">
            <div className=" col-lg-3 col-sm-5 box ">
            <p className="ps-3"><b>FREE</b></p>
            <span className="ps-3">$</span><h1  className="d-inline">0</h1><span>USD</span>
            <p className="text-secondary p-3">Free for your whole team</p>
            <p className="p-3">For individuals or teams looking to organize any project.</p>
            <button  className="p-3 rounded border-info but1">Get started</button>
            <hr/>
            <h5>INCLUDED IN FREE:</h5>
            <ul>
                <li>Unlimited cards</li>
                <li>Up to 10 boards per Workspace</li>
                <li>Unlimited Power-Ups per board</li>
                <li>Unlimited storage (10MB/file)</li>
                <li>250 Workspace command runs per month</li>
                <li>Custom backgrounds & stickers</li>
                <li>Unlimited activity log</li>
                <li>Assignee and due dates</li>
                <li>iOS and Android mobile apps</li>
                <li>2-factor authentication</li>
            </ul>
            </div>
            <div className="col-lg-3 col-sm-5 box">
            <p><b>STANDARD</b></p>
            <span >$</span><h1  className="d-inline">5</h1><span>USD</span>
            <p className="text-secondary">Per user/month if billed annually ($6 billed monthly)</p>
            <p>For small teams that need to manage work and scale collaboration.</p>
            <button className="p-3 rounded border-info but1">sign up now</button><br/><br/>
            <hr/>
            <h5>EVERYTHING IN FREE, PLUS:</h5>
            <ul>
                <li>Unlimited boards</li>
                <li>Advanced checklists</li>
                <li>Custom Fields</li>
                <li>Unlimited storage (250MB/file)</li>
                <li>1,000 Workspace command runs per month</li>
                <li>Single board guests</li>
                <li>Saved searches</li>
                
            </ul>
            <Link to={'/standered'}><a href="./standered.js" >Learn more about Standerd</a></Link>
            </div>
            <div className=" col-lg-3 col-sm-5 border-info box">
            <p><b>PREMIUM</b></p>
            <span >$</span><h1  className="d-inline">10</h1><span>USD</span>
            <p className="text-secondary">Per user/month if billed annually ($12.50 billed monthly)</p>
            <p>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
            <button className="p-3 rounded border-info but1">try for Free</button><br/>
            <hr/>
            <h5>EVERYTHING IN STANDARD, PLUS:</h5>
            <ul>
                <li>Views: Calendar, Timeline, Table, Dashboard, and Map</li>
                <li>Workspace views: Table and Calendar</li>
                <li>Unlimited Workspace command runs</li>
                <li>Admin and security features</li>
                <li>Workspace-level templates</li>
                <li>Collections</li>
                <li>Observers</li>
                <li>Simple data export</li>
                
            </ul>
            <Link to={'/Premium'}><a href="./premium.js" >Learn more about premium</a></Link>
            </div>
            <br/><br/>
            <div className="row justify-content-center"><br/><br/>
                <h4 className="text-center">Frequently asked questions</h4>
                <div className="col-10">
                <details>
                     <summary className="text-bold">Does Trello offer a Premium free trail?</summary>
                    <p>We sure do. All users can enroll their Workspace in a free trial of Trello Premium. With that trial your Workspace will get access to create unlimited Trello boards, automate as much as you’d like, take advantage of Timeline, Dashboard, and other new views, and much more!</p>
                </details>
                <hr></hr>
                
                <details>
                     <summary className="text-bold">Do you offer any discounted plants?</summary>
                    <p>Yes! Trello offers both a non-profit community discount as well as an education discount.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                        what payment methods do you accept?
                    </summary>
                    <p>You can purchase a monthly or annual Trello Standard or Premium subscription with any major credit card. We offer more options for Enterprise customers, if you’re interested in learning more about Trello Enterprise contact our sales team.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                       how do I cancel my Trello standard or premium subscription?
                    </summary>
                    <p>If you aren’t 100% satisfied with Trello Standard or Premium you may downgrade at any time. When a team downgrades from Standard or Premium, it retains its Standard or Premium features and unlimited boards until the end of its prepaid service period. At the end of its prepaid service period, it becomes a free Trello Workspace that can hold 10 boards. Learn more about canceling your Standard or Premium subscription here.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                        How are users counted towards billing
                    </summary>
                    <p>A Trello user who is added as a member to a Workspace—either as a normal member or as a team admin—is considered a billable team member that is included in the cost of Trello Standard or Premium.

Any Guest that is on more than one board within the Workspace is considered a Multi-Board Guest and is billed at the same rate as Standard or Premium Workspace members. See this page for more information on Multi-Board Guests.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                        Is there an on-premises version of Trello?
                    </summary>
                    <p>Trello is proudly a cloud-only product. We offer access via the web, desktop, and our awesome mobile apps.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                    Can I have Trello Standard or Premium just for my own account?
                    </summary>
                    <p>Trello Standard and Premium are designed for all teams—even teams of one! To upgrade to Standard or Premium you’ll need to create a Workspace and then upgrade that Workspace.</p>
                </details>
                <hr></hr>
                <details>
                     <summary className="text-bold">
                        How secure is Trello?
                    </summary>
                    <p>Trello, Inc. (“we”, “us” or “our”) is SOC2 Type 2 certified—we receive and review our data hosting providers’ SOC1 and SOC2 reports every 6 months under NDA. Trello is ISO/IEC 27001 certified which validates our information security management system (ISMS) and the implementation of our security controls. More information is available on the Atlassian Trust Management System. Trello is PCI-DSS certified. Learn more about Trello’s security protocols here.</p>
                </details>
                <hr></hr></div>
            </div>
            </div>
        </>
    );
}
