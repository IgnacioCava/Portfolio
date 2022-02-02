import React from "react"
import styled from 'styled-components'
import user from '../Props/anon.png'

export default function MyContact(){

    return(
        <MySelf id='mycontact'>
            <Contact>
                <h1>CONTACT DATA</h1>
                <h5 className="carreer">PERN Stack</h5>
                <h5 className="carreer">Web Developer</h5>
                <Media>
                    <button>
                        LinkedIn
                    </button>
                    <button>
                        Github
                    </button>
                    <button>
                        Gmail
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