import React from "react"
import styled from 'styled-components'
import front from '../Props/frontend.png'
import CV from '../Props/CV - Ignacio Cava.pdf'
import download from '../Props/download.png'

export default function Resume(){

    
    return(
        <ResumePage id='resume'>
            <div>
                <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 style={{margin:0}}>Resume</h1>
                <a href={CV} download style={{width:40, height:40}}><img src={download} alt='cv' style={{width:40, height:40}}/></a>

                </div>
                <Text>
                    Im a Full Stack Web Developer
                    with an ambition-fueled desire for
                    constant growth and self improvement. I'm passionate
                    about learning new tecnologies,
                    always pointing towards finding
                    the most versatile and robust
                    solutions possible.
                </Text>
            </div>
            
            <hr/>
            <AllMyResume>
                <SoftSkills>
                    <h2 style={{marginTop:0}}>Soft skills</h2>
                        <Ab>
                
                            Ambition
                            <Text>I always try to aim high, and learn a new technology for every project I make</Text>
                        </Ab>
                        <hr/>
                        <Ab>
                        
                            Communication 
                            <Text>I make sure to stay updated on any new problems or objectives the team may have</Text>
                        </Ab>
                        <hr/>
                        <Ab>
                    
                            Teamwork
                            <Text>Check different visions of a proposed idea and unify them into a latent reality</Text>
                        </Ab>
                        <hr/>
                        <Ab>
                        
                            Responsibility
                            <Text>I go above and beyond to ensure timely deliveries</Text>
                        </Ab>
                        <hr/>
                        <Ab>

                            Creativity
                            <Text>I do my best to come up with original and flashy designs</Text>
                        </Ab>
                </SoftSkills>

                <AcademicRecord>
                <h2 style={{padding:'0 10px'}}>Academic record</h2>
                    <Henry>
                        <Career href='https://www.soyhenry.com/' target="_blank">Henry - 800+ hours</Career>
                        <Text style={{fontSize:15, marginBottom:0}}>FullStack Web Developer
                        2021 - 2022</Text>
                        <Text style={{fontSize:15, margin:0}}>2021 - 2022</Text>
                        <p>Developed both individual and team SPAs:</p>
                        <ul>
                            <li>
                            <a style={{color:"white"}} href='https://weathernacho.netlify.app/'>Weather app</a>
                            </li>
                            <li>
                            <a style={{color:"white"}} href='https://foodpi-front.herokuapp.com/'>Food recipes app</a>
                            </li>
                            <li>
                            <span style={{color:'white'}}>Training app - WIP</span>
                            </li>
                        </ul>
                    </Henry>

                    <Languages>
                        <h2>Languages</h2>
                        <div>
                            <p style={{fontSize:20, marginBottom:0}}>
                                English - C2 Proficient
                            </p>
                            <a style={{color:"grey"}} href='https://www.efset.org/cert/Yxmazq'>EF Standard English Test</a>
                            <p style={{fontSize:20, marginBottom:0}}>
                                Spanish - Native
                            </p>
                        </div>
                    </Languages>
                </AcademicRecord> 
            </AllMyResume>
        </ResumePage>
    )
}

const Languages = styled.div`
padding:0 20px;
border-top:1px solid #313131;
`

const Career = styled.a`
font-size: 20px;
font-weight: 500;
color:#5a99ff;
text-decoration: none;

`

const Henry = styled.div`
padding:0 20px;
`

const AcademicRecord = styled.div`
`

const AllMyResume = styled.div`
display:flex;
justify-content: center;
`

const ResumePage = styled.div`
    h2{
    margin-top:0;
}
`

const SoftSkills = styled.div`
position: relative;
width: 30%;
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
flex-direction: column;
white-space: break-spaces;
word-break:break-word;

border-right:1px solid #313131;
hr{
    margin:0 0 10px 0 !important;
}
`

const Ab = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
word-wrap:break-word;
`

const Text = styled.p`
    color:grey;
    font-size: small;
    line-height: 18px;
`