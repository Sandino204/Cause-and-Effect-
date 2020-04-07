import React, {useState} from 'react';
import './App.css';
import {Card, CardHeader, Collapse, CardBody} from 'reactstrap'

function RenderArray({array}){
    
  const [isOpen, setIsOpen] = useState(false)   

  const toggle = () => setIsOpen(!isOpen)


  return(
    array.map((value, id) => {
      return(
        
        <Card key={id} className="mb-5 col-12 p-0">
          <CardHeader onClick={toggle} className="bg-primary text-light">
            {value.name}
          </CardHeader>
          <Collapse isOpen={isOpen}>
            <CardBody>
              Id: {value.id} <hr></hr>
              Contact: {value.contact}
            </CardBody>
          </Collapse>
        </Card>
      )
    })
  )
  }

  export default RenderArray