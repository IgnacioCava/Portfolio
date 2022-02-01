import React from "react"
import styled from 'styled-components'
import About from './Pages/About'
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects"
import Resume from "./Pages/Resume"

export default function Page(){


    return(
        <CurrentPage>
                <About/>
                <Resume/>
                <Projects/>
                <Contact/>
        </CurrentPage>
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
overflow: auto;
`