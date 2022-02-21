import React from "react"
import styled from 'styled-components'
import AboutMe from './VerticalPages/AboutMe'
import MyResume from "./VerticalPages/MyResume"
import MyContact from "./VerticalPages/MyContact"
import MyProjects from "./VerticalPages/MyProjects"

export default function Vertical(){

    return(
        <VerticalScale id='vertical'>
            <AboutMe/>
            <MyResume/>
            <MyProjects/>
            <MyContact/>    
        </VerticalScale>
    )
}

const VerticalScale = styled.div`
    position: absolute;
    left:7.5%;
    width:35%;
    top:-7.5%;
    height: 115%;
    overflow: hidden;
    scroll-behavior: smooth;
    background-color: #202020;
    overflow:hidden;
    border-radius: 10px;
    box-shadow: -7px 0px 8px 16px rgb(0 0 0 / 35%);
    z-index: 1;
`
