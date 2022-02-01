import React from "react"
import styled from 'styled-components'
import AboutMe from './VerticalPages/AboutMe'
import MyResume from "./VerticalPages/MyResume"
import MyContact from "./VerticalPages/MyContact"
import MyProjects from "./VerticalPages/MyProjects"

export default function Vertical(){

    return(
        <VerticalScale>
            <AboutMe/>
            <MyResume/>
            <MyContact/>
            <MyProjects/>
        </VerticalScale>
    )
}

const VerticalScale = styled.div`
    position: absolute;
    left:7.5%;
    width:35%;
    top:-7.5%;
    height: 115%;
    overflow: auto;
    border-radius: 10px;
    box-shadow: -7px 0px 8px 16px rgb(0 0 0 / 35%);
`
