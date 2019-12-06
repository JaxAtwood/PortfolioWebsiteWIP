import styled from 'styled-components';

const Button = styled.a `
  border: solid white 1px;
  background: white;
  color: black;
  max-width: 15vw;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 30px;
`

const Typer = styled.div`
    color: white;
    text-shadow: 0 0 10px teal;
    text-anchor: start;
    fill: #fffcf9;
    font-family: Helvetica, Arial, sans-serif;
    border: red solid 1px;
    height: 80px;
    margin: 0 auto;
    margin-top: 20%;
    max-width: 34vw;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 100%;
`

const Code = styled.img `
    width: 100%;
    position: fixed;
    z-index: -1;
    filter: blur(2px);
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100vh;
`

export { Typer, Code, Button }


