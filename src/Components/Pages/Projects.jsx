import React from "react"
import styled from 'styled-components'
import front from '../Props/frontend.png'
import weatherapp from '../Props/weatherapp.png'
import foodapp from '../Props/foodapp.png'
import trainingapp from '../Props/trainingapp.png'
import eventsapp from '../Props/eventsapp.png'


export default function Projects(){

    return(
        <ProjectsPage id='projects'>
            <div>
                <h1>Projects</h1>
                <Text>These are some of the SPAs I've worked on, with more to come</Text>
            </div>
            
            <hr/>

            <ProjectSquare>
                    <Project href='https://weathernacho.netlify.app/' target='_blank'>
                        <span>
                            Weather App
                            <Text>My first project at the Henry Fullstack web development bootcamp with which I practiced my React, CSS and API usage abilities. A responsive SPA that takes information from an external API, bringing you weather data of whatever location in the world, like current temperature, weather cast, time of day, as well as counting with geolocation services.</Text>
                        </span>
                        <img src={weatherapp} alt='skill'/>
                    </Project>
                    <Project href='https://foodpi-front.herokuapp.com/' target='_blank'>
                        <span>
                            Weather App
                            <Text>Individual proyect at Henry. A responsive SPA that let's you search and filter recipes brought from an external API, as well as creating your own recipes and storing them in a relational database.</Text>
                        </span>
                        <img src={foodapp} alt='skill'/>
                    </Project>
                    <Project>
                        <span>
                            Training app - Work In Progress
                            <Text>A SPA that will connect trainers, nutritionists and clients, allowing each to react new contacts to prosper in a reputation-driven ecosystem.</Text>
                        </span>
                        <img src={trainingapp} alt='skill'/>
                    </Project>
                    <Project>
                        <span>
                            Movies App - Work In Progress
                            <Text>An application that will allow searching, indexing (and hopefully visualizing) movies online.</Text>
                        </span>
                        <img src={eventsapp} alt='skill'/>
                    </Project>
                    <Project>
                        <span>
                            Events App - Work In Progress
                            <Text>My first involvement with React Native, a team effort to bring a native app that will make easy work of organizing and delegating tasks for social events companies.</Text>
                        </span>
                        {/* <img src={front} alt='skill'/> */}
                    </Project>

            </ProjectSquare>
        </ProjectsPage>
    )
}

const ProjectsPage = styled.div`

`

const ProjectSquare = styled.div`
display:flex;
flex-direction: column;
gap:10px;
`


const Project = styled.a`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
word-wrap:break-word;
border:1px solid #313131;
border-radius: 10px;
background-color: #161616d1;
padding:10px;
font-size: 20px;
color:inherit;
text-decoration: none;
transition: .3s;
img{
    width: 30%;
}
a{
    color: inherit;
}
:hover{
    background-color: #242424;
}
`

const Text = styled.p`
    color:grey;
    font-size: small;
    line-height: 18px;
`