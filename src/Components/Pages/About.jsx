import React from "react"
import styled from 'styled-components'
import front from '../Props/frontend.png'
import back from '../Props/backend.png'
import db from '../Props/database.png'
import ui from '../Props/uxui.png'

export default function About(){
    //scrollHeight: 684
    return(
        <AboutPage id='about'>
            <div>
                <h1>About me</h1>
                <Text>
                    I began my technological journey in highschool, where I learned a bit of C, C++, Assembly and PLC programming with multiple software. It was here that I discovered my love for automation, be it of systematic procedures or solution development
                </Text>

                <Text>
                I'm a Javascript lover, web development fan and, overall, a tech enthusiast, everywhere from electronics to programming. Today, I'm learning the ins and outs of the web, always aiming to be a better developer than yesterday
                </Text>
            </div>
            
            <hr/>

            <Abilities>
                <h2>my skills</h2>
                <AbIcons>
                    <Ab>
                        <img src={front} alt='skill'/>
                        Frontend development
                        <Text>
                            I develop beautiful, scalable, fully responsive applications, always adapted to the user's needs
                        </Text>
                    </Ab>
                    <Ab>
                        <img src={back} alt='skill'/>
                        Backend development
                        <Text>
                            Untangled coding to ensures quick feature implementation and readability
                        </Text>
                    </Ab>
                    <Ab>
                        <img src={db} alt='skill' style={{width:100}}/>
                        Database management
                        <Text>
                            Aimed at reaching the best performance for seamless, lagless usage
                        </Text>
                    </Ab>
                    <Ab>
                        <img src={ui} alt='skill'/>
                        UX / UI
                        <Text>Designing interactive, easy to use interfaces, ensuring a good user experience in your web pages</Text>
                    </Ab>
                </AbIcons>
            </Abilities>
            
        </AboutPage>
    )
}

const AboutPage = styled.div`
    /* height: 100%;
    width:95%;
    overflow: hidden auto;
    hr{
        border-bottom:0;
        border-right:0;
        border-color: #868686;
        margin: 30px 0 30px 0;
        width: 100%;
    }
    h1{
        font-size: 40px;
        margin-top: 0;
    } */
`

const Abilities = styled.div`
position: relative;
h2{
    margin: 0 0 10px 0;
}
`

const AbIcons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
white-space: break-spaces;
word-break:break-word;
width: 100%;
`

const Ab = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 40%;
margin-top:20px;
word-wrap:break-word;
img{
    width: 40px;
}
`

const Text = styled.p`
    color:grey;
    font-size: small;
    line-height: 18px;
    margin-bottom:0;
`