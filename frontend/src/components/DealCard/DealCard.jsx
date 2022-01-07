import {React, useState} from 'react'
import "./DealCard.css"
import Button from '@material-ui/core/Button';
import {Card} from 'react-bootstrap';

export default function DealCard({dealCard}) {
    const [dealName, setDealName] = useState();
    
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={dealCard.imgSrc} /> */}
            <Card.Img variant="top" src="/images/avatar.jpg" />
            <Card.Body>
                <Card.Title>{dealCard.name}</Card.Title>
                <Card.Text>{dealCard.startDate}</Card.Text>
                <Card.Text>{dealCard.endDate}</Card.Text>
                <Card.Text>{dealCard.pax}</Card.Text>
                <Card.Text>{dealCard.info}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
