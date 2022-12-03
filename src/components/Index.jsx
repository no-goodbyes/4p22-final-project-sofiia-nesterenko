import React from 'react';
import '../styles/Index.css';
import '../styles/CardContainer.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import {ButtonToolbar, ButtonGroup, Button, Form, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/products/productsSlice";
import Loader from "../UI/Loader/Loader";



const Index = () => {

    const [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loading]);
  const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getProducts());
    }, []);

  const [filtered, setFiltered] = useState(products);

  useEffect( () => {
  setFiltered(products)
  }, [products]);

   function toFilter (category) {
   if(category === 'all'){
   setFiltered(products)
   } else {
     let newProducts = [...products].filter(item => item.category === category)
      setFiltered(newProducts)
     }
  }

  const [searchQuery, setSearchQuery] = useState('');
  const searchedProducts = filtered.filter(item =>{
    return item.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
      <>
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

        <div className='card-container'>
          {
              !isLoading && searchedProducts.map((item, index) => {
            return <Card key={index}
                         title ={item.title}
                         description={item.description}
                         image={item.image}
                         price={item.price}
                         id={item.id}/>
          })
          }
            {
                isLoading &&  (
                    <Container className="d-flex justify-content-center mt-5"><Loader/></Container>
                )
            }
        </div>
      </>
  );
};

export default Index;