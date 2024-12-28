import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const bestCars = [
  {
    name: 'Tesla Model S',
    image: 'https://via.placeholder.com/300x200',
    description: 'A luxury electric car with cutting-edge technology.',
    price: '$80,000',
  },
  {
    name: 'Ford Mustang',
    image: 'https://via.placeholder.com/300x200',
    description: 'An iconic muscle car with a powerful V8 engine.',
    price: '$55,000',
  },
  {
    name: 'Mercedes-Benz',
    image: 'https://via.placeholder.com/300x200',
    description: 'Benz, is a German luxury and commercial vehicle brand that was founded in 1926.',
    price: '$55,000',
  },
];

const BestCars = () => {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-5">Best Cars</h2>
      <Row>
        {bestCars.map((car, index) => (
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

export default BestCars;
