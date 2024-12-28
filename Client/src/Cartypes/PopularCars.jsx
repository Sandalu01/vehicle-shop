import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const popularCars = [
  {
    name: 'Toyota Corolla',
    image: 'https://via.placeholder.com/300x200',
    description: 'Reliable and fuel-efficient sedan for everyday use.',
    price: '$20,000',
  },
  {
    name: 'Honda Civic',
    image: 'https://via.placeholder.com/300x200',
    description: 'A sporty compact car with advanced features.',
    price: '$22,000',
  },
];

const PopularCars = () => {
  return (
    <div className="mb-5">
      <h2 className="text-center mb-5">Popular Cars</h2>
      <Row>
        {popularCars.map((car, index) => (
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

export default PopularCars;
