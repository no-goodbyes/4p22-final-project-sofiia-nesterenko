import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, Form} from "react-bootstrap";

const Categories = () => {
    return (
        <ButtonToolbar
            className="justify-content-center"
            aria-label="Toolbar with Button groups"
        >
            <ButtonGroup aria-label="First group" className="mt-4 button-group">
                <Button  onClick= {() => toFilter(`all`)}>All</Button>{' '}
                <Button onClick={() => toFilter(`women's clothing`)}>Women's clothing</Button>{' '}
                <Button  onClick={() => toFilter(`men's clothing`)}>Men's clothing</Button>{' '}
                <Button onClick= {() => toFilter('electronics')}>Electrics</Button>
                <Button  onClick= {() => toFilter('jewelery')}>Jewelry</Button>
            </ButtonGroup>
            <Form className="d-flex mt-4 ml-2" >
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-input"
                    aria-label="Search"
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </Form>
        </ButtonToolbar>
    );
};

export default Categories;