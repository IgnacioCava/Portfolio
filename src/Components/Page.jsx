import React from "react"
import styled from 'styled-components'
import About from './Pages/About'
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Resume from "./Pages/Resume"

export default function Page(){

    return(
        <>
        <ShadowLimiter></ShadowLimiter>
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
top:2.5%;
width:55%;
height: 95%;
color:white;
white-space: break-spaces;
word-break:break-word;
scroll-behavior:smooth;
overflow: hidden;
>div{
    padding-top:2%;
    margin-bottom: 100px;
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