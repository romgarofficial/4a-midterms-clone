import { useState, useEffect } from 'react';
import { Container, Button, Form, Image } from 'react-bootstrap';


export default function Exam2(){

    // Animals photo link : use this : do not edit
    const dog = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
    const cat = "https://media-be.chewy.com/wp-content/uploads/2019/10/28105544/catbehavior-HERO-1024x576.jpg"
    const bird = "https://www.science.org/do/10.1126/science.adm7485/abs/_20231102_on_bird_names_wilsons_warbler.jpg"
    const noAnimalSelected = "";

    // invoke your animalSearch() function inside this useEffect for the live changes
    useEffect(()=>{
        
    })

    // declare useState variable here to get the user input : don't forget the setter and getter [input, setInput]
    // declare useState variable here to get the equvalent animal : don't forget the setter and getter [animal, setAnimal]

    const [input, setInput] = useState("");
     const [animal, setAnimal] = useState(noAnimalSelected);


    // Add your code here, use useState and useEffect to create your own function
   
    function animalSearch(){

    }


    return(
        <>
            <Container className='p-5 my-4 bg-light border border-1 border-dark rounded-5'>
                <h1 className='display-6 fw-bold mb-5'>CHALLENGE #2</h1>
                <Container fluid>
                    <Form className=''>
                        <Form.Label className='fw-bold d-flex flex-column'>RESULTS WILL BE HERE.</Form.Label>
                        {/* Image part is here : wanna change the src? : src={variable}*/}
                        <Image className='w-25 rounded-3' alt='image result' />
                         {/* Add onChange event to invoke the function and to modify useState Value : Add value={variable} */}
                        <Form.Control required type='text' className='my-3'  placeholder='Input text hehre' />
                    </Form>
                </Container>
            </Container>
            
        </>
    )
}