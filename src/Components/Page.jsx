import React from "react"
import styled from 'styled-components'
import About from './Pages/About'
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Resume from "./Pages/Resume"

export default function Page(){

    return(
        <>
        {/* <ShadowLimiter></ShadowLimiter> */}
        <CurrentPage id='pages'>
                <About/>
                <Resume/>
                <Projects/>
                <Contact/>
        </CurrentPage>
        </>
    )
}

const CurrentPage=styled.div`
position: absolute;
text-align: start;
right:0;
width:55%;
height: 98%;
top:1.5%;
color:white;
white-space: break-spaces;
word-break:break-word;
scroll-behavior:smooth;
overflow: hidden;
>div{
    padding-right:1%;
    margin-bottom: 100px;

    height: 99%;
    width:98%;
    overflow: hidden auto;

    /* :hover::-webkit-scrollbar{
        width: 10px;
    } */
    
    ::-webkit-scrollbar{
        background-color: #2d2f31;
        width: 5px;
        border-radius: 10px;
        overflow: auto;
    } 
    ::-webkit-scrollbar-thumb{
        background-color: #4ba676;
        border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color:#4ba676 transparent;

    hr{
        border-bottom:0;
        border-right:0;
        border-color: #868686;
        margin: 30px 0 30px 0;
        width: 100%;
    }
    h1{
        font-size: 40px;
        margin-top: 0;
        margin-bottom: 15px;
    }
}
`

const ShadowLimiter = styled.div`
position: absolute;
right:0;
top:2%;
width:55%;
height: 88%;
border: 30px solid red;
border-right: 0;
border-left: 0;
border-image: linear-gradient(#1d1e20, transparent, #1d1e20) 100 stretch;
overflow: hidden;
z-index: 1;
`