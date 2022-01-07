import React, { useState } from "react";
import "./DealCard.css"
import Button from '@material-ui/core/Button';
import {Card} from 'react-bootstrap';

export default function DealCard({dealCard}) {
    
    return (
        <Card className="DealCard">
            
            <Card.Body>
                <Card.Img variant="top" src={dealCard.imgSrc} style ={{height:"20%"}}/>
                <Card.Title>{dealCard.name}</Card.Title>
                <Card.Text>{dealCard.startDate}</Card.Text>
                <Card.Text>{dealCard.endDate}</Card.Text>
                <Card.Text>{dealCard.pax}</Card.Text>
                <Card.Text>{dealCard.info}</Card.Text>
                <Button variant="primary" style={{border: "1px solid #000"}}>Find Sharers!</Button>
            </Card.Body>
        </Card>
    )
}
