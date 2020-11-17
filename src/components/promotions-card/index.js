import React from 'react';
import { Card, ButtonGroup, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

import './promotions-card.css'

export default function PromotionsCard (props) {
    const { isAdmin, title, value_real, value_discount, name, evaluation } = props 
  
    return (
      <Card style={{ marginBottom: 35, width: 350 }} >
        <Card.Img variant="top" src="https://static-images.ifood.com.br/image/upload/f_auto,t_high/discoveries/ifood-capas-almoco10-app-v01-feb2020.png" />
        <Card.Body>
        <Card.Title> {title} </Card.Title>
          <Card.Text>
            <div className="promostionscard__info">
              <div className="promostionscard__info--place">
                <span className="promostionscard__info--placevaluation">
                  <FontAwesomeIcon icon={faStar} /> {evaluation}
                </span>
                &nbsp;·&nbsp; {name}
              </div>
              <div className="promostionscard__info--price">
                { new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'brl'}).format(value_discount)} 
                <span> {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'brl'}).format( value_real)} </span>
              </div>
            </div>
          </Card.Text>
          {
            isAdmin && (
              <Actions />
            )
          }
        </Card.Body>
      </Card>
    );
}

const Actions = () => (
  <ButtonGroup>
    <OverlayTrigger
      placement={'top'}
      overlay={
        <Tooltip id={`tooltip-top`}>
          Editar
        </Tooltip>
      }
    >
      <Button variant="outline-info">
        <FontAwesomeIcon icon={faPen} />
      </Button>
    </OverlayTrigger>
    <OverlayTrigger
      placement={'top'}
      overlay={
        <Tooltip id={`tooltip-top`}>
          Excluir
        </Tooltip>
      }
    >
      <Button variant="outline-danger">
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </OverlayTrigger>
  </ButtonGroup>
)
