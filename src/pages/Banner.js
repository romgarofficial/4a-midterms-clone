import { Container, Button } from 'react-bootstrap';

export default function Banner(){
    return(
        <>
            <Container fluid className='p-3 shadow rounded-bottom sticky-top banner-bg mb-3 text-center border-bottom border-primary border-5'>
                <h1 className='display-4 fw-bold text-light'>Good Luck!</h1>
            </Container>
        </>
    )
}