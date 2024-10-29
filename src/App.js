import { Container } from 'react-bootstrap';
import './App.css';
import Exam1 from './pages/Exam1';
import Banner from './pages/Banner';
import Exam2 from './pages/Exam2';
import Exam3 from './pages/Exam3';



function App() {
  return (
    <>
      <Container fluid className='m-0 p-0'>
      <Banner/>
        <Exam1/>
        <Exam2/>
        <Exam3/>
      </Container>
    </>
  );
}

export default App;
