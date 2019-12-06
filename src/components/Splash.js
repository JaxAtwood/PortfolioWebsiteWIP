import React from "react";

import { Circle, SplashDiv, SplashCard, Overlap, Pitch, PitchTitle, Icons, P } from "../styling/SplashStyle";

export default function Splash() {
    return (
        <div>
            <Pitch>
            <PitchTitle>Pitch/Blurb</PitchTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Pitch>
            <SplashDiv>
                <Overlap>
                <Circle><Icons src="/sitemap.svg"></Icons>design</Circle>
                <SplashCard><P>consult, come together, uniquely yours, custom-built/scratch, no templates-more text</P></SplashCard>
                </Overlap>
                <Overlap>
                <Circle><Icons src="/code.svg"></Icons>develop</Circle>
                <SplashCard><P>using modern lang's and practices, using most relevant libraries and frameworks</P></SplashCard>
                </Overlap>
                <Overlap>
                <Circle><Icons src="/cogs.svg"></Icons>function</Circle>
                <SplashCard><P>fully functional website, deployed via hosting site of your choice, some recs</P></SplashCard>
                </Overlap>
                <Overlap>
                <Circle><Icons src="/share.png"></Icons>support</Circle>
                <SplashCard><P>new ideas/design change?, tech support? We recommend (Link), let's grow together</P></SplashCard>
                </Overlap>
            </SplashDiv>
        </div>
    )
}