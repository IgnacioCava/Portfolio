import React from "react"
import styled from 'styled-components'
import user from '../Props/anon.png'
import react from './Props/react.png'
import redux from './Props/redux.png'
import node from './Props/node.png'
import express from './Props/express.png'
import postgreSQL from './Props/postgresql.png'
import sass from './Props/sass.png'
import mongodb from './Props/mongodb.png'
import firebase from './Props/firebase.png'
import git from './Props/git.png'
import figma from './Props/figma.png'
import sequelize from './Props/sequelize.png'
import js from './Props/js.png'

export default function MyResume(){

    return(
        <MySelf id='myresume'>
            <Contact>
                <h1>My technologies</h1>
            </Contact>
            <Icons>
                <img src={js} alt='react'/> 
                <img src={react} alt='react'/>               
                <img src={node} alt='node'/>               
                <img src={redux} alt='redux'/>               
                <img src={sass} alt='react'/>                
                <img src={express} alt='express'/>               
                <img src={postgreSQL} alt='react'/>
                <img src={sequelize} alt='react'/>             
                <img src={mongodb} alt='react'/>                
                <img src={firebase} alt='react'/>              
                <img src={git} alt='react'/>
                <img src={figma} alt='react'/>

            </Icons>
            
        </MySelf>
    )
}

const Icons = styled.div`
display: flex;
flex-wrap: wrap;
margin:0 10px;
align-items: center;
justify-content: space-evenly;
min-height: 90%;
height: fit-content;
//gap:2% 2%;
img{
    width: 12vh;
    height: 12vh;
    padding:10px;
}
`

const MySelf = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:white;
    justify-content: center;
    bottom:0;
    height: 100%;
    width:100%;
    background-color: #202020;
    overflow:auto;
    ::-webkit-scrollbar{
        background-color: #2d2f31;
        width: 5px;
        border-radius: 10px;
        overflow: auto;
    } 
    ::-webkit-scrollbar-thumb{
        background-color: #3F59B8;
        border-radius: 10px;
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: fit-content;
    //background-image: linear-gradient(transparent, #3f3f3fb5 20% 80%, transparent);
    h1{
        margin-top:0;
    }
    .carreer{
        color:#3F59B8;
        margin:0;
    }
`