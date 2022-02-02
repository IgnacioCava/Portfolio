import React from "react"
import styled from 'styled-components'

export default function SideNav(){
    const pages = ['About', 'Resumé', 'Projects', 'Contact']
    const ids = ['about', 'resume', 'projects', 'contact']

    // useEffect(()=>{
    //     document.getElementById('pages').addEventListener('scroll', ()=>{})
    // }, [])
      
    return(
        <Nav>
            <Theme>
                <button>color</button>
            </Theme>
            <Buttons>
                {pages.map((page,i)=>
                <button type='button' key={'nav'+i}
                onClick={()=>{
                    document.getElementById('vertical').scrollTo({
                        top: document.getElementById('my'+ids[i]).offsetTop,
                        
                      })
                    document.getElementById('pages').scrollTo({
                        top: document.getElementById(ids[i]).offsetTop,
                        
                      })
                }}>
                    {page}

                </button>
                )}
                
            </Buttons>
            
        </Nav>
    )
}

const Nav = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
width:7%;
`

const Theme = styled.div`
height: 10%;
width:100%;
`

const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 60%;
width:100%;
/* a{
    scroll-behavior: smooth;
    display: none;
    visibility: hidden;
} */
button{
    background-color:transparent;
    color:white;
    border:0;
    height: 100%;
    transition:.2s;
    outline: 0;
    :hover, :focus, :active{
        background-color: #4ba676;
    }
}
`