import React from "react";

import { ProjectDiv, ProjectCard, CollabDiv, CollabCard, TestDiv, TestCard } from "../styling/WorkStyle";

export default function Work() {
    return (
        <div>
            <h1>A Few Screen Grabs of Work I've Done</h1>
                <ProjectDiv>
                    <ProjectCard src="/darkmode.png" alt="darkmode screenshot"></ProjectCard>
                    <ProjectCard src="/shoppingcart.png" alt="shopping cart screenshot"></ProjectCard>
                    <ProjectCard src="/faveband.png" alt="favoriteband screenshot"></ProjectCard>
                    <ProjectCard src="/foxapi.png" alt="fox API screenshot"></ProjectCard>
                </ProjectDiv>
                <ProjectDiv>
                    <ProjectCard src="/empathy.png" alt="empathy screenshot"></ProjectCard>
                    <ProjectCard src="/VRFunding.png" alt="VR Funding screenshot"></ProjectCard>
                    <ProjectCard src="/friendsapp.png" alt="friends app screenshot"></ProjectCard>
                    <ProjectCard src="/nasa.png" alt="nasa API screenshot"></ProjectCard>
                </ProjectDiv>
                <h1>Collaborative Projects</h1>
                <CollabDiv>
                    <CollabCard>Project 1</CollabCard>
                    <CollabCard>Project 2</CollabCard>
                    <CollabCard>Project 3</CollabCard>
                </CollabDiv>
                <h1>Endorsements / Testimonials</h1>
                <TestDiv>
                    <TestCard>Person 1</TestCard>
                    <TestCard>Person 2</TestCard>
                    <TestCard>Person 3</TestCard>
                    <TestCard>Person 4</TestCard>
                    <TestCard>Person 5</TestCard>
                    <TestCard>Person 6</TestCard>
                </TestDiv>
        </div>
    )
}