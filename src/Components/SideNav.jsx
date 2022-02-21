import React from "react"
import styled from 'styled-components'

export default function SideNav(){
    const pages = ['About', 'Resumé', 'Projects', 'Contact']
    const ids = ['about', 'resume', 'projects', 'contact']

    let lastSide

    window.addEventListener('resize', ()=>{
        let vertial=document.getElementById('vertical')
        if(lastSide){
            vertial.style.scrollBehavior='auto'
            vertial.scrollTo({top: document.getElementById(lastSide).offsetTop})
            vertial.style.scrollBehavior='smooth'
        }
    })

    return(
        <Nav>
            <Theme>
                <button>color</button>
            </Theme>
            <Buttons>
                {pages.map((page,i)=>
                <button className='nav' type='button' key={'nav'+i}
                    onClick={()=>{
                        if(lastSide==='my'+ids[i]) return 0
                        ids.map(e=>{
                            document.getElementById(e).style.transition='.15s'
                            document.getElementById('my'+e).style.transition='.15s'
                            return 0
                        })
                        ids.map(element=>{
                            document.getElementById('my'+element).style.opacity='0'
                            document.getElementById(element).style.opacity='0'
                            return 0
                        })
                        
                        setTimeout(()=>{
                            document.getElementById(ids[i]).scrollTop=0
                            document.getElementById('vertical').scrollTo({top: document.getElementById('my'+ids[i]).offsetTop})
                            document.getElementById('pages').scrollTo({top: document.getElementById(ids[i]).offsetTop})
                           
                                document.getElementById('my'+ids[i]).style.opacity='1'
                                document.getElementById(ids[i]).style.opacity='1'
                            
                        }, 150)
 
                        lastSide = 'my'+ids[i]
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
    opacity: 0;
} */
button{
    background-color:transparent;
    color:white;
    border:0;
    height: 100%;
    transition:.2s;
    outline: 0;
    :hover, :focus, :active{
        background-color: #3F59B8;
    }
}
`