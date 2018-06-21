import React from "react";
import SimpleSlider from './slick';
import Icon from './fontawesome';
import { Container, Row, Col } from 'reactstrap';
import "./index.css";

const App = () => (
    <Container>
        <Row>
            <Col xs="12">
                <h1>Webpack Front End Starter</h1> 
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="6">       
                <h2>Slick</h2>
                <SimpleSlider />
             </Col>
            <Col xs="12" sm="6">  
                <h2>Fontawesome Icons</h2>
                <Icon icon="facebook"/>
                <Icon icon="twitter"/>            
            </Col>
        </Row>
    </Container>
);
  
export default App;