import React from 'react'
import {Card} from "react-bootstrap"

const Cards = ({img,title,text}) => {
    return (
        <div>
            <Card style={{ width: '18rem',border:"none"}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default Cards
