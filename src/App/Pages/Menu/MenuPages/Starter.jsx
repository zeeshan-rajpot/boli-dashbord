import React from 'react';
import StarterCard from './StarterCard.jsx';
import { Row, Col } from 'react-bootstrap';

const Starter = () => {
  return (
    <div>
      <Row className='no-gutters'>
        <Col lg={3} md={3} xl={3}>
          <StarterCard
            Image='/Cheese Burger .png'
            price='3.88'
            Name='Cheese Burger'
          />
        </Col>
        <Col lg={3} md={3} xl={3}>
          <StarterCard
            Image='/Toffe’s Cake.png'
            price='3.88'
            Name='Toffe’s Cake'
          />
        </Col>
        <Col lg={3} md={3} xl={3}>
          <StarterCard Image='/Dancake.png' price='3.88' Name='Dancake' />
        </Col>
        <Col lg={3} md={3} xl={3}>
          <StarterCard
            Image='/Crispy Sandwitch .png'
            price='3.88'
            Name='Crispy Sandwitch'
          />
        </Col>
        <Col lg={3} md={3} xl={3}>
          <StarterCard
            Image='/White Sauce Pasta.png'
            price='3.88'
            Name='Thai  Soup'
          />
        </Col>

        <Col lg={3} md={3} xl={3}>
          <StarterCard
            Image='/Cheese Burger .png'
            price='3.88'
            Name='Cheese Burger'
          />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
