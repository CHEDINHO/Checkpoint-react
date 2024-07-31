import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './price';
import Description from './description';
import Image from './image';

import './App.css';

const firstName = "Chedi"; 

function App() {
  return (
    <Container className="my-4">
      <div className="text-center my-4">
        <h2>Hello, {firstName || "there!"}</h2>
        {firstName && <img className='po' src="https://media.gettyimages.com/id/1362593682/photo/manchester-england-cristiano-ronaldo-of-manchester-united-reacts-wearing-the-captains-armband.jpg?s=612x612&w=0&k=20&c=Z6AvaYzxfQMsRQ4U03myYjqmWXzXsakbokE2EXsYDfM=" alt="Placeholder" />}
      </div>
      <Card className="product-card">
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
