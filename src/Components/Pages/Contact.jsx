import React from "react"
import styled from 'styled-components'
import emailjs from 'emailjs-com'

export default function Contact(){

    function sendEmail(event){
        event.preventDefault()
        
        emailjs.sendForm('gmail', 'template_11qvbyb', event.target, 'user_4yJsJ2XQLH5OA0ZuQCfyh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

      event.target.reset()
    }

    return(
        <ContactPage id='contact'>
            <div>
                <h1>Contact me</h1>
                <Text>You can reach me out through LinkedIn, Github, or just send me an email</Text>
            </div>
            
            <hr/>

            <EmailForm onSubmit={sendEmail}>
                <input type='text' placeholder='Your name or corporation' name='name'/>
                <input type='text' placeholder='Email address' name='email'/>
                <input type='text' placeholder='Subject' name='subject'/>
                <textarea rows='10' type='text' placeholder='Message' name='message'/>
                <input type='submit' value='Send' id='send'/>
            </EmailForm>
        </ContactPage>
    )
}

const EmailForm = styled.form`
display: flex;
flex-direction: column;
height:fit-content;
margin-right:10px;
gap:20px;
padding:10px;
*{
    padding: 7px;
    border: 0px solid transparent;
    background-color: #9393931a;
    outline: none;
    border-radius: 5px;
    color: #cacaca;
    box-shadow: 2px -4px 3px 3px #93939336, -3px 3px 3px 4px #00000080;//, inset -3px 3px 4px -1px #0000009c, inset 2px -2px 2px 0px #b1b1b140
    ::placeholder{
        color:grey;
    }
}
textarea{
    resize:vertical
}
#send{
    box-shadow: 1px -2px 4px 1px #b1b1b147, -3px 3px 4px 2px #0000009c, inset 0px 0px 0px 0px #0000009c, inset 0px 0px 7px 0px #b1b1b140;
    border: 1px solid #3232326b;
    background-color: #323e88;
    width: 20%;
    align-self: flex-end;
    cursor:pointer;
}
`

const ContactPage = styled.div`
`

const Text = styled.p`
    color:grey;
    font-size: small;
    line-height: 18px;
`