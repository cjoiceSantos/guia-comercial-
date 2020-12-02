import React, { Component } from 'react';
import { Row, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PromotionsCard from '../promotions-card';

import './admin-promotions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class Promotions extends Component {
  render() {
    return (
      <>
        <Fade top>
          <section className="promotions__header">
            <h4>Suas promoções</h4>
            <div id="actions">
              <OverlayTrigger
                placement={'top'}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Cadastrar
                  </Tooltip>
                }
              >
                <Button variant='success' style={{ marginRight: 5 }}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </OverlayTrigger>

              <input type="text" placeholder="Buscar" className="form-control" />
            </div>
          </section>
        </Fade>
        <Fade top>
          <Row>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
            <Col md={4}>
              <PromotionsCard isAdmin />
            </Col>
          </Row>
        </Fade>
      </>
    );
  }
}
