import React from "react"
import styled from 'styled-components'
import Li from './Props/linkedin highres.png'
import Gh from './Props/GitHub.png' 
import lilogo from './Props/linkedin-logo.png'
import ghlogo from './Props/GitHub-Logo.png'


export default function MyContact(){

    return(
        <MySelf id='mycontact'> 
        <div id='licont' onClick={()=>{
            window.open('https://www.linkedin.com/in/ignacio-cava-534269224/', '_black')
        }}>
            
            <div id='LinkedIn'>
                <img src={Li} alt='LinkedIn'/>
            </div>
            <div id='lilogo'>
                <img src={lilogo} alt='LinkedIn'/>
            </div>
        </div>         
        
        
        
        <div id='ghcont' onClick={()=>{
                window.open('https://github.com/IgnacioCava', '_black')
            }}>

            <div id='GitHub'>
                <img src={Gh} alt='LinkedIn'/>
            </div>
            <div id='ghlogo'>
                <img src={ghlogo} alt='LinkedIn'/>
            </div>    
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
        div{
            height: 100%;
            overflow: hidden;
        }
    }
    img{
        height:100%;
        width: 100%;
        object-fit: contain ;
    }
    #licont{
        div{
            transition: .5s;
        }
        #lilogo{
            transition: .5s;
            height: 0%;
            padding:0 10px 0 10px;
            box-sizing: border-box;
            background-color: white;
            top:0;
        }
        #LinkedIn{
            transition: .5s;
        }
        :hover{
            #LinkedIn{
                height: 0%;
            }
            #lilogo{
            height: 100%;
            }
        }
    }
    #LinkedIn{
        background-color: #007bb6 !important;
    }

    #ghcont{
        div{
            transition: .5s;
        }
        #ghlogo{
            transition: .5s;
            height: 0%;
            padding:0 10px 0 10px;
            box-sizing: border-box;
            background-color: white;
            top:0;
        }
        #GitHub{
            transition: .5s;
            padding: 10px 0;
            box-sizing: border-box;
        }
        :hover{
            #GitHub{
                height: 0%;
                padding:0;
            }
            #ghlogo{
            height: 100%;
            }
        }
    }
    #GitHub{
        padding: 0 10px
    }
`