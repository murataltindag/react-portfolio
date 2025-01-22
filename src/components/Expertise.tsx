import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Git",
    "Docker",
    "Linux",
];

const labelsSecond = [
    "SQL",
    "Pentaho", 
    "Power BI", 
    "AWS",
    "GCP", 
    "Python",
    "MongoDB", 
];

const labelsThird = [
    "C++",
    "C#",
    "Visual Studio",
    ".NET",
    "Unreal Engine",
    "Java",
    "GenAI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I specialize in developing full-stack solutions, using Python and React to build APIs and web applications. I emphasize clean coding practices and Git version control to ensure high-quality deliverables.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Systems & Analytics</h3>
                    <p>I design scalable databases and utilize ETL processes for actionable insights. My work spans building SQL databases on cloud platforms and visualizing complex datasets, enabling informed decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Game Development & Real-time Systems</h3>
                    <p>Leveraging my expertise in C++, C#, and Unreal Engine, I create real-time applications such as video games. With a strong focus on performance, I apply advanced optimization techniques and design patterns.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;