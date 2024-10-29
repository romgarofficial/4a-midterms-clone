import { useState, useEffect } from 'react';
import { Container, Button, Form, Image } from 'react-bootstrap';


export default function Exam3(){

    // invoke your passwordCheck() in this useEffect for the live rendering of password status
    useEffect(()=>{
        
    })

    // declare a function named "passwordCheck"
    // declare a useState variable with setter and getter for password1 : [password1, setPassword1]
    // declare a useState variable with setter and getter for password2 : [password2, setPassword2]
    // declare a useState variable with setter and getter for password1 : [status, setStatus]

    /* NOTE: status
    
    set status to 1 if the password is <=7 in length
    set status to 2 if password1 and password2 are not equal
    set status to 3 if password1 and password2 matched
    
    */

    // use ".length" to check the lenght of the password
    function passwordCheck(){

    }

    return(
        <>
            <Container className='p-5 my-4 bg-light border border-1 border-dark rounded-5'>
                <h1 className='display-6 fw-bold mb-5'>CHALLENGE #3</h1>
                <Container fluid>
                    <Form className=''>
                        <Form.Label className='fw-bold d-flex flex-column'>PASSWORD CHECKER</Form.Label>
                         {/* Add onChange event to invoke the function and to modify useState Value : add value={variable}*/}
                        <Form.Control required type='text' className='my-3' placeholder='Enter Password'/>
                         {/* Add onChange event to invoke the function and to modify useState Value : add value={variable}*/}
                        <Form.Control required type='text' className='my-3' placeholder='Confirm Password'/>

                        {/* Create a conditional rendering here : the shortcut method for if and else : using "?" and ":" */}
                        {/* Ypu can search on check old codes on your pc to check how conditional rendering work */}
                        
                        {/* you can use this label for the conditional rendering : it will be used 3 times */}
                         <Form.Label className='fw-bold d-flex flex-column text-warning'>Password is too short.</Form.Label>

                    </Form>
                </Container>
            </Container>
            
        </>
    )
}