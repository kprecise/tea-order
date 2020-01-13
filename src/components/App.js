import React, { useState } from "react";
import { Container, Row, Col, Form, Input, Button, FormGroup } from 'reactstrap';

import "./index.scss";

const App = () => {
    const customerData = [
        {
            id: 'CUST-0014124',
            name: "Peter Rogers",
            type: "standard"
        },
        {
            id: 'CUST-0013781',
            name: "John Williams",
            type: "premium"
        }                  
    ]
    const [results, setResults] = useState(false);
    const [formStatus, setFormStatus] = useState(false);
    const [displayResults, setDisplayResults] = useState({id: '', name: '', type: ''});

    const setCustomerType = (customerType) => {
        event.preventDefault();
        if (customerType !== 'none') {
            setFormStatus(true)
            const loggedInCustomer = customerData.filter(customer => customer.type === customerType);
            const {
                id,
                name,
                type
            } = loggedInCustomer[0];
            setResults(true);
            setDisplayResults({id, name, type});
            getResults();
        } else {
            setFormStatus(false);
        }
    }

    const getResults = () => {
        const isPremium = displayResults.type === "premium"
        return (
            <div id="results">
                <h2>Details</h2>
                <strong>Customer No:</strong> : {displayResults.id}<br/>
                <strong>Name</strong> : {displayResults.name}<br/>
                <strong>Type</strong>: {displayResults.type}
                <hr/>
                <h2>Offers</h2>
                {isPremium ? 
                    <div>
                        <strong>Premium</strong><br />
                        <ul>
                            <li>Offer 2, Offer 7, Offer 82</li>
                        </ul>
                    </div> 
                    : 
                    <div>
                        <strong>Standard</strong><br />
                        <ul>
                            <li id="offer">Offer 1</li>
                        </ul>
                    </div>
                }
            </div>  
        )
    }  
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Customer</h1>
                    <Form id="form" onSubmit={event => setCustomerType(event.target.select.value)}>
                        <FormGroup>
                            <Input type="select" id="select" name="select">
                                <option value="none">Choose one</option>
                                <option name="standard" id="standard" value="standard">Standard</option>
                                <option name="premium" id="premium" value="premium">Premium</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" id="form-submit">Submit</Button>
                        </FormGroup>
                    </Form>
                    {formStatus ?
                        <div id="contentArea">
                            {results ? getResults(displayResults) : 'Please select an option'}
                        </div> : ''
                    }
                </Col>
            </Row>
        </Container>
    )
}
 
export default App;