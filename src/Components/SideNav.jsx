import React from "react"
import styled from 'styled-components'

export default function SideNav(){

    return(
        <Nav>
            <Theme>
                <button>color</button>
            </Theme>
            <Buttons>
                <a href="#about">About</a>
                <a href="#resume">Resumé</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </Buttons>
            
        </Nav>
    )
}

const Nav = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
width:7%;
`

const Theme = styled.div`
height: 10%;
width:100%;
`

const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 60%;
width:100%;
button{
    background-color:transparent;
    color:white;
    border:0;
    height: 100%;
    transition:.2s;
    outline: 0;
    :hover, :focus{
        background-color: #4ba676;
    }
}
`