import React from 'react';
import './App.css';
import { Container, Row, Col} from 'reactstrap'
import RenderArray from './RenderArray'


function App() {

  const array = [
    {name: 'Sandino1', id: 1, contact: "sandino123456789@gmail.com"}, 
    {name: 'Sandino2', id: 2, contact: "sandino123456789@gmail.com"}, 
    {name: 'Sandino3', id: 3, contact: "sandino123456789@gmail.com"}, 
    {name: 'Sandino4', id: 4, contact: "sandino123456789@gmail.com"}
  ]




  return (
    <div>
       <Container className="App">
        <Row className="mb-5">
          <Col>
            <h1>Cause And Effect</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <RenderArray array={array}/>
        </Row>
      </Container>
    </div>
  )
}
export default App;
