import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const carModels = [
  {
    name: 'BMW X5',
    image: 'https://via.placeholder.com/300x200',
    description: 'A luxury SUV combining performance and comfort.',
    price: '$60,000',
  },
  {
    name: 'Audi A4',
    image: 'https://via.placeholder.com/300x200',
    description: 'A premium sedan with exceptional engineering.',
    price: '$45,000',
  },
];

const CarModels = () => {
  return (
    <div>
      <h2 className="text-center mb-5">Car Models</h2>
      <Row>
        {carModels.map((car, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="vehicle-card h-100">
              <Card.Img variant="top" src={car.image} className="vehicle-card-img" />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <h5 className="text-primary">{car.price}</h5>
                <Button variant="primary" className="mt-2">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CarModels;
