import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/CSC453-Group-Project/LinkedIn" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/CSC453-Group-Project/LinkedIn" target="_blank" rel="noreferrer"><h2>LinkedIn Data Visualization</h2></a>
                <p>This project aims to transform LinkedIn profile data from survey responses into a and visual format using Pentaho for ETL processes and Power BI for data visualization.</p>
            </div>
            <div className="project">
                <a href="https://docs.google.com/document/d/1hImH6_xDDZlHulTsY1K4KRvIqBw4GmrzDbFgShTiyb8/edit?usp=sharing" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/document/d/1hImH6_xDDZlHulTsY1K4KRvIqBw4GmrzDbFgShTiyb8/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Space Invaders</h2></a>
                <p>A replica of the original arcade Space Invaders, built with C# on Visual Studio. This project was great practice both for Game Development and implementing OOP design patterns.</p>
            </div>
            <div className="project">
                <a href="https://murataltindag.github.io/debt-snowball-calc/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://murataltindag.github.io/debt-snowball-calc/" target="_blank" rel="noreferrer"><h2>Debt Snowball Calculator</h2></a>
                <p>A debt snowball calculator built with Flutter. This project helps users to pay off their debts faster by following the debt snowball method.</p>
            </div>
            <div className="project">
                <a href="https://css-toolbox.lovable.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://css-toolbox.lovable.app/" target="_blank" rel="noreferrer"><h2>CSS Toolbox</h2></a>
                <p>A simple, AI-powered tool to help web designers find their favorite CSS style without coding.</p>
            </div>
            <div className="project">
                <a href="https://github.com/murataltindag/RoomScape" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/murataltindag/RoomScape" target="_blank" rel="noreferrer"><h2>RoomScape Project</h2></a>
                <p>3D local co-op game simulating an escape room with puzzles. Added an inventory system, controller support, and start/end menus.</p>
            </div>
            
            
            <div className="project">
                <a href="https://fishy-game.lovable.app/" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://fishy-game.lovable.app/" target="_blank" rel="noreferrer"><h2>Fishy Game</h2></a>
                <p>A web prototype for a game I am currently developing on Unity.</p>
            </div>
            
            
            
            
        </div>
    </div>
    );
}

export default Project;