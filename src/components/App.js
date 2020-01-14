import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Button, FormGroup, Label, Alert } from 'reactstrap';

import "./index.scss";

const App = () => {
    const [teaOrder, setTeaOrder] = useState(false)
    const [teaReady, setTeaReady] = useState(false)
    const [currentOrder, setCurrentOrder] = useState('')

    const placeOrder = (milk, sugar) => {
        event.preventDefault();
        setTeaReady(false);
        const newOrder = orderTea(milk, sugar); newOrder;
    }

    const orderTea = (milkPref, sugarPref) => {
        setTeaOrder(true);
        function makeTea() {
            setTeaOrder(false);
            setTeaReady(true);
            setCurrentOrder(`Your tea with ${milkPref ? 'milk' : 'no milk' } and ${sugarPref} sugars is ready!`)
        }
        setTimeout(function(){ 
            makeTea();
        }, 5000);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Order Tea</h1>
                    <p>Please tell us how you like your tea:</p>
                    <Form id="form" onSubmit={event => placeOrder(event.target.milk.value, event.target.sugar.value)}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="milk" value="false" defaultChecked>No</Input>{' '}
                                I do not want any milk
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="milk" value="true">Yes</Input>{' '}
                                I would like milk please
                            </Label>
                        </FormGroup>                 
                        <FormGroup>
                            <Label for="sugar">How many sugars?</Label>
                            <Input type="select" id="sugar" name="sugar">
                                <option value="no">No sugars</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Button>Order Tea</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            { teaOrder ? 
            <Row>
                <Col>
                    <Alert color="info">We're making your tea. It sholdn't take too long.....</Alert>
                </Col>
            </Row> : ''
            }
            { teaReady ? <Alert color="success">{currentOrder} </Alert> : '' }
        </Container>
    )
}
 
export default App;