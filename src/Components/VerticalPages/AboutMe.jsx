import React from "react"
import styled from 'styled-components'
import user from '../Props/anon.png'
import Li from './Props/LinkedIn.png'
import Gh from './Props/GitHub.png' 

export default function AboutMe(){

    return(
        <MySelf id='myabout'>
            <Contact>
                <h1>Ignacio Cava</h1>
                <h5 className="carreer">Full Stack</h5>
                <h5 className="carreer">Web Developer</h5>
                <Media>
                    <button onClick={()=>{
                        window.open('https://www.linkedin.com/in/ignacio-cava-534269224/', '_black')
                    }}>
                        <Icon src={Li} alt='LinkedIn'/>
                    </button>
                    <button onClick={()=>{
                        window.open('https://github.com/IgnacioCava', '_black')
                    }}>
                        <Icon src={Gh} alt='LinkedIn'/>
                    </button>
                </Media>
            </Contact>
        </MySelf>
    )
}

const MySelf = styled.div`
    position: relative;
    color:white;
    justify-content: center;
    bottom:0;
    height: 100%;
    width:100%;
    background-color: #2e2e2e;
    background-image: url(${user});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Media = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    button{
        border:0;
        background-color:transparent;
        color:white;
        transition: .3s;
        cursor: pointer;
        :hover{
            transform: scale(110%);
        }
    }
`

const Contact = styled.div`
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    width:100%;
    //background-image: linear-gradient(transparent, #3f3f3fb5 20% 80%, transparent);
    h1{
        margin-top:0;
    }
    .carreer{
        color:#4ba676;
        margin:0;
    }
`

const Icon = styled.img`
    width: 35px;
`