import React from "react"
import styled from 'styled-components'
import dev from '../Props/dev.png'

export default function Projects(){

    return(
        <ProjectsPage id='projects'>
            <div>
                <h1>Projects</h1>
                <Text>ProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjectsProjects</Text>
            </div>
            
            <hr/>

            <Abilities>
                <h2>my abilities</h2>
                <AbIcons>
                    <Ab>
                        <img src={dev} alt='skill'/>
                        Frontend development
                        <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Ab>
                    <Ab>
                        <img src={dev} alt='skill'/>
                        Backend development
                        <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Ab>
                    <Ab>
                        <img src={dev} alt='skill'/>
                        Database management
                        <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Ab>
                    <Ab>
                        <img src={dev} alt='skill'/>
                        Agile methodologies
                        <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </Ab>
                </AbIcons>
            </Abilities>
        </ProjectsPage>
    )
}

const ProjectsPage = styled.div`
    /* width:95%;
    overflow: hidden auto;
    height: 100%;
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
`