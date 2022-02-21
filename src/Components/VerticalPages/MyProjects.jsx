import React from "react"
import styled from 'styled-components'
import Li from './Props/linkedin highres.png'
import Gh from './Props/GitHub.png' 
import weatherapp from '../Props/weatherapp.png'
import foodapp from '../Props/foodapp.png'

export default function MyProjects(){

    return(
        <MySelf id='myprojects'>
            <div id='weather' onClick={()=>{
                window.open('https://weathernacho.netlify.app/', '_black')
            }}>
                <img src={weatherapp} alt='weatherapp'/>
                <p>Weather App</p>
            </div>         
        
        
        
            <div id='food' onClick={()=>{
                    window.open('https://foodpi-front.herokuapp.com/', '_black')
                }}>
                <img src={foodapp} alt='foodapp'/>
                <p>Food Recipes App</p>
            </div>
        </MySelf>
    )
}

const MySelf = styled.div`
    color:white;
    justify-content: center;
    bottom:0;
    height: 100%;
    width:100%;
    >div{
        height: 50%;
        cursor:pointer;
        position: relative;
        
        :hover{
            p{
                opacity:1;
            }
        }
    }
    p{
        transition: .5s ease-in-out;
        position: absolute;
        margin:0;
        align-items: center;
        justify-content: center;
        background-color: #202020c5;
        backdrop-filter: blur(2px);
        opacity:0;
        top:0;
        font-size: 30px;
        height: 100%;
        width: 100%;
        display: flex;
    }
    img{
        height:100%;
        width: 100%;
        object-fit: contain;
        transition: .5s;
    }
`