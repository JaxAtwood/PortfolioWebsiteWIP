import React from "react";

import { Icons, IconDiv } from "../styling/AboutStyle";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                <h1>Fun Facts!</h1>
                <p>Geography?</p>
                <p>Hobbies?</p>
                <h1>Skills/Knowledge</h1>
                <p>Languages</p>
                <p>Libraries</p>
                <p>Frameworks</p>
                <p>Tools</p>

            </div>
            <IconDiv>
                <a className="anchors" rel="noopener noreferrer" target="_blank" href="https://github.com/JaxAtwood"><Icons src="/GitHubLogo.png" alt="github icon" title="GitHub"></Icons></a>
                <a className="anchors" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jackie-atwood/"><Icons src="/LinkedInLogo.png" alt="Linkedin icon" title="LinkedIn"></Icons></a>
                <a className="anchors" rel="noopener noreferrer" target="_blank" href="Resume.pdf"><Icons src="/PDficon.png" alt="PDF icon" title="PDF Resume"></Icons></a>
                <a className="anchors" target="_blank" rel="noopener noreferrer" href="mailto:webdevjackie@gmail.com"><Icons src="/Emailicon.png" alt="Envelope icon"></Icons></a>
            </IconDiv>
        </div>
    )
}