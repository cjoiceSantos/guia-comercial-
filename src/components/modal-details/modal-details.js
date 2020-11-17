import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearchLocation, faUsers, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Modal, Container, Card, Row, Col } from 'react-bootstrap';
import './modal-details.css';

import img from "../../images/clinica.jpg";
import { formatPhone } from '../../utils';
const ModalDetails = (props) => {

    const {
        show,
        onHide,
        name,
        description,
        evaluation,
        instagram,
        whatsapp,
        locality,
        number,
        complements,
        city,
        uf,
        comments
    } = props;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title> Saiba mais </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-company">
                    <h6> {name} tem uma avaliação de {evaluation} <FontAwesomeIcon icon={faStar} />  </h6>
                    <p className="evalutions-count">
                        <FontAwesomeIcon icon={faUsers} /> 12323 pessoas avaliaram
                    </p>
                    <p> {description} </p>
                </div>
                <div className="icon-contact">
                    <span>
                        <FontAwesomeIcon icon={faMapMarkedAlt} id="faSearchLocation" size="lg" />
                        {`${locality}, ${number}, ${city} - ${uf}`}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faInstagram} id="faInstagram" size="lg" />
                        {instagram}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faWhatsapp} id="faWhatsapp" size="lg" />
                        <a href={`https://api.whatsapp.com/send?phone=55${whatsapp}&text=Olá`}>{formatPhone(whatsapp)}</a>
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Card>
                    <Card.Body>
                        <img src={img} />
                        <span> Maria </span>
                        <Card.Text>
                            <p>Some quick example text to build on the card titent.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <img src={img} />
                        <span> José </span>
                        <Card.Text>
                            <p>Some quick example text to build on the card titent.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDetails;
