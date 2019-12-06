import styled from "styled-components";

const Pitch = styled.div `
    // border: 1px solid gray;
    max-width: 36em;
    // padding-left: 220px;
    // padding-right: 220px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-bottom: 5px;
    // box-shadow: 1px 1px 10px 1px #888888;
    background: white;
    // box-shadow: 1px 1px 10px 1px #14bdbd;
    font-size: 1.1rem;
`

const PitchTitle = styled.h1 `
    margin: 0;
    margin-top: 5px;
    font-family: 'Caveat Brush', cursive;
    font-size: 30px;
    margin-bottom: -20px;
`

const Circle = styled.p `
    border: black solid 2px;
    background: #14bdbd;
    border-radius: 100%;
    width: 100px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Caveat Brush', cursive;
    font-size: 1.6rem;
    margin: 0 auto;
    z-index: 1;
    // padding-top: 10px;
`
const Icons = styled.img `
    width: 50px;
    // border: solid red 1px;
    height: 50px;
    margin-bottom: -30px;
    margin-top: -10px;
`

const SplashDiv = styled.div `
    // border: green solid 1px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 30px;
`

const SplashCard = styled.div `
    border: #14bdbd solid 1px;
    width: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-items: space-around;
    height: 80%;
    margin-top: -60px;
    padding-top: 80px;
    margin-left: 5px;
    margin-right: 5px;
    background: white;
`

const P = styled.p `
    width: 90%;
    // border: red solid 1px;
    margin: 0 auto;
    margin-bottom: -50px;
    height: 130px;
`

const Overlap = styled.div `
    // border: solid blue 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 0 auto;
`

export { Circle, SplashDiv, SplashCard, Overlap, Pitch, PitchTitle, Icons, P };