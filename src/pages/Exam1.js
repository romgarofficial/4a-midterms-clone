import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';


export default function Exam1(){

    // Add your code here, use useState and create your own function
    // create functions called "increaseAge" and "decreaseAge"
    // create another functions called "checkResult"
    // declare a useState value with setter and getter [age, setAge]
    // declare a useState value with setter and getter [result, setResult]

    // AGE CLASSIFFICAITON
    // Infant: Birth to 1 year old.
    // Toddler: 2 to 4 years old.
    // Preschooler: 5 to 6 years old.
    // Child: 7 to 12 years old.
    // Adolescent: 13 to 18 years old.
    // Young Adult: 19 to 35 years old.
    // Middle-aged Adult: 36 to 55 years old.
    // Senior Adult: 56 years and older.

    const [age, setAge] = useState(0);
    const [result, setResult] = useState("RESULT WILL BE DISPLAYED HERE.");


    return(
        <>
            <Container className='p-5 my-4 bg-light border border-1 border-dark rounded-5'>
                <h1 className='display-6 fw-bold mb-5'>CHALLENGE #1</h1>
                <Container fluid>
                    <Form className=''>
                        <Form.Label className='fw-bold'>{result}</Form.Label>
                        <Form.Control required type='number' disabled value={age} className='my-3'/>
                        {/* Add onClick event to invoke the function and to modify useState Value */}
                        <Button className='btn-success px-5 mx-1' >+</Button>
                        <Button className='btn-warning px-5 mx-1' >-</Button>
                        <Button className='btn-primary px-5 mx-1' >Check</Button>
                    </Form>

                </Container>
            </Container>
            
        </>
    )
}