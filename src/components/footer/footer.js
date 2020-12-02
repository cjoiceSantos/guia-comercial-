import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/logo.png';
import "./footer.css";

const Footer = () => (

    <Container id="footer">
        <Row >
            <Col id="infor">
                <img src={logo} alt="logo" />
                <p> © Copyright 2020 - Guia Comercial - Todos os direitos reservados </p>
            </Col>

            <Col id="social">
                <h5> Social </h5>
                <span>
                    <FontAwesomeIcon icon={faInstagram} id="faInstagram" /> @guiacomercial
                </span>
                <span>
                    <FontAwesomeIcon icon={faWhatsapp} id="faWhatsapp" /> (84) 0000-0000
                </span>
                <span>
                    <FontAwesomeIcon icon={faFacebook} id="faFacebook" /> (84) 0000-0000
                </span>
            </Col>

            <Col id="links">
                <a href="#"> Quem somos  </a>
                <a href="#"> Fale conosco  </a>
                <a href="#"> Termos de uso  </a>
                <a href="#"> Código de conduta </a>
                <a href="#"> Dicas de segurança </a>
            </Col>
        </Row>
    </Container>
);

export default Footer;
