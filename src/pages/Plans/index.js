import React from 'react'

import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearchDollar, faBullhorn, faMoneyCheckAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';

import "./plans.css";
import { Fade } from 'react-reveal';
import { formatMoney } from '../../utils';

export default function Plans() {
    return (
        <Container>
            <Fade bottom>
                <Row>
                    <Col className="information">
                        <h3> Como e por que anunciar no nosso guia comercial? </h3>
                        <p>
                            Nossa plataforma tem a missão de fazer com que sua empresa tenha sua
                            marca divulgada e seja encontrada de forma rápida e prática.
                            Com o objetivo de ser referência em publicidade digital na sua cidade, trabalhamos para que a
                            experiência de possíveis clientes no site e o retorno dos anunciantes no portal
                            sejam sempre além das expectativas. Veja como é simples anunciar:
                </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="information">
                        <FontAwesomeIcon icon={faSearchDollar} size="3x" />
                        <p> Escolha o plano que mais atende o seu modelo do seu negócio.</p>
                    </Col>
                    <Col className="information">
                        <FontAwesomeIcon icon={faTasks} size="3x" />
                        <p> Cadastre sua empresa e as informações para divulgação do seu produto ou
                        serviço. </p>
                    </Col>
                    <Col className="information">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} size="3x" />
                        <p>
                            Escolha forma de pagamento do plano escolhido.
                    </p>
                    </Col>
                    <Col className="information">
                        <FontAwesomeIcon icon={faBullhorn} size="3x" />
                        <p>
                            Seu produto ou serviço será publicado.
                    </p>
                    </Col>

                </Row>
                <Row>
                    <Col >
                        <div className="plan">
                            <div className="plan-type">
                                <h3> Básico </h3>
                            </div>
                            <h2> {formatMoney(0)} </h2>
                            <h5> ao Mês </h5>
                            <ListGroup>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Nome do produto ou serviço, endereço e telefone disponíveis na plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Marketing e divulgação da sua empresa nas redes sociais da plataforma
                            </ListGroup.Item>
                                <Button variant="light">
                                    <Link to="/register"> CADASTRAR MINHA EMPRESA </Link>
                                </Button>
                            </ListGroup>


                        </div>
                    </Col>
                    <Col>
                        <div className="plan">
                            <div className="plan-type">
                                <h3> Clássico </h3>
                            </div>
                            <h2> {formatMoney(0)} </h2>
                            <h5> ao Mês </h5>
                            <ListGroup>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Nome do produto ou serviço, endereço e telefone disponíveis na plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Marketing e divulgação da sua empresa nas redes sociais da plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Cadastro de promoções e cupons de desconto para seus clientes
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Saiba quantas pessoas buscaram por sua empresa e quantas usaram seus cupons de descontos
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Gráficos com informações sobre os acessos da sua empresa na plataforma
                            </ListGroup.Item>
                                <Button variant="light">
                                    <Link to="/register"> CADASTRAR MINHA EMPRESA </Link>
                                </Button>
                            </ListGroup>

                        </div>
                    </Col>
                    <Col>
                        <div className="plan">
                            <div className="plan-type">
                                <h3> Premium </h3>
                            </div>
                            <h2> {formatMoney(0)} </h2>
                            <h5> ao Mês </h5>
                            <ListGroup>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Nome do produto ou serviço, endereço e telefone disponíveis na plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Marketing e divulgação da sua empresa nas redes sociais da plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Cadastro de promoções e cupons de desconto para seus clientes
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Saiba quantas pessoas buscaram por sua empresa e quantas usaram seus cupons de descontos
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Gráficos com informações sobre os acessos da sua empresa na plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Gerenciamento de delivery
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Criação de cardápio virtual
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Pagamento na plataforma
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheck} /> Histórico de vendas e pedidos
                            </ListGroup.Item>
                                <Button variant="light">
                                    <Link to="/register"> CADASTRAR MINHA EMPRESA </Link>
                                </Button>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>
    );
}
