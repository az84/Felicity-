import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

export const ContactUs = () => (
  <Container>
    <Row>
      <Col>
          <h2 className="text-center"><img src={require('../assets/images/ContactUs.png')} width="50%" height="50%" alt="Contact Us Header" /></h2>
          <h5>We'd love to hear from you</h5>
                  
          <p>Whether you have a question about our products, pricing, or anything else, our team is ready to answer your questions .</p>
          
          <p className="text-center"> <Mailto email="zaidialina1@gmail.com" subject="General Inquiry" body="I'd like to ask about ..."><img src={require('../assets/images/email.png')} width="10%" height="10%" alt="Email Me" /></Mailto></p>
      </Col>
    </Row>
  </Container>
)