import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './promotions.css'
//import api from '../../services/api';
import PromotionsCard from '../../components/promotions-card';


export default function Promotions(){
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: "Sorveteria da Maria", 
      value_real: 5,
      value_discount: 4,
      name: "Sorveteria da Maria",
      evaluation: 5
    },
    {
      id: 2,
      title: "Mercadinho da Maria", 
      value_real: 5,
      value_discount: 4,
      name: "Sorveteria da Maria",
      evaluation: 5
    },
    {
      id: 3,
      title: "Farmacia da Maria", 
      value_real: 5,
      value_discount: 4,
      name: "Sorveteria da Maria",
      evaluation: 5
    }      
  ]);

  /* useEffect(
     async ()=> {
      await api.get('promotions').then(response => setPromotions(response.data)); 
     setPromotions([
     
     ])
    //}
    , []
  );  */

    return (
      <Container>
        <div className="promotionspage__header">
          <h4>
            Promoções perto de você
          </h4>
        </div>
        <Row>
          {
            promotions.map(company => (
              <Col md={4} key = {company.id}>
                <PromotionsCard 
                  title = {company.title}  
                  value_real = {company.value_real}
                  value_discount = {company.value_discount}
                  name = {company.name}
                  evaluation = {company.evaluation}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    );
}
