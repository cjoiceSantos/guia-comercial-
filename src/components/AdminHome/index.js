import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';

import './admin.css'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IndicatorCard from '../indicator-card';
import { Fade } from 'react-reveal';
import Promotions from '../admin-promotions';

export default class AdminHome extends Component {
  render() {
    return (
      <div className="admin__container">
        <Container style={{ marginTop: 25 }}>
          <Fade top>
            <h3>Bem vindo, Fulano!</h3>
          </Fade>

          <Fade top>
            <Row>
              <Col>
                <IndicatorCard
                  title="Cliques em sua página"
                  info="Quantas vezes as pessoas clicaram em sua página na tela de buscas"
                  indicator="4"
                />
              </Col>
              <Col>
                <IndicatorCard
                  title="Busca por seu estabelecimento"
                  info="Quantas vezes as pessoas buscaram nominalmente por seu estabelecimento"
                  indicator="12"
                />
              </Col>
              <Col>
                <IndicatorCard
                  title="Busca por categoria"
                  info="Quantas vezes as pessoas buscaram por estabelecimentos de mesma categoria que a sua"
                  indicator="10"
                />
              </Col>
            </Row>
          </Fade>
          <Promotions />
        </Container>
      </div>

    );
  }
}
