import React from "react"
import styled from 'styled-components'
import Vertical from './Vertical'
import Page from './Page'
import SideNav from "./SideNav"

export default function Holder(){

    return(
        <AppHolder>
            <Vertical/>
            <Page/>
            <SideNav/>
        </AppHolder>
    )
}

const AppHolder = styled.div`
display: flex;
height: 80%;
width: 80%;
position: relative;
background-color: #1d1e20;
`

