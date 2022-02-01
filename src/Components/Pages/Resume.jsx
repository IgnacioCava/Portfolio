import React from "react"
import styled from 'styled-components'
import dev from '../Props/dev.png'

export default function Resume(){

    return(
        <ResumePage id='resume'>
            <div>
                <h1>About me</h1>
                <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>
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
        </ResumePage>
    )
}

const ResumePage = styled.div`
    width:90%;
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
    }
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