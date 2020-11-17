import React, { useState, useRef } from 'react';

import "./company-card.css";
import ModalEvalution from "../modal-evalution/modal-evalution";
import ModalDetails from "../modal-details/modal-details"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button, FormControl, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';

import imageee from "../../images/sorveteria.jpg"

export default function CompanyCard(props) {

    const [showEvalution, setEvalution] = useState(false);
    const [showDetails, setDetails] = useState(false);

    const {
        name,
        description,
        evaluation,
        category,
        instagram,
        whatsapp,
        locality,
        number,
        complements,
        city,
        uf,
        image_name,
        isDelivery
    } = props;

    const hideEvalution = () => { setEvalution(false) };
    const hideDetails = () => { setDetails(false) };

    return (
        <div>
            <div id="company-card">
                <img src={imageee} alt="supermercado logo" />
                <div className="infor_company">
                    <div className="infor_company--body">
                        <div className="header_card" >
                            <span onClick={() => setDetails(true)}> {name} </span>
                            {
                                isDelivery
                                && (
                                    <OverlayTrigger
                                        placement='top'
                                        arrowProps={{ style: { background: '#f2f2f2' } }}
                                        overlay={
                                            <Tooltip id={`tooltip-top`}>
                                                Este estabelecimento possui um cardápio virtual. Faça agora seu pedido!
                                    </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon icon={faShoppingCart} size="sm" color="#a3a3a3" style={{ opacity: 0.9 }} />
                                    </OverlayTrigger>
                                )
                            }
                        </div>
                        <div className="infor_card">
                            <span className="avaliation">
                                <FontAwesomeIcon icon={faStar} />
                            &nbsp;
                            {evaluation}
                            </span>
                            <span className="category">
                                • {category}
                            </span>
                        </div>
                    </div>
                    <div className="infor_company--footer">
                        <div className="card_actions">
                            <button className="button-card-company" onClick={() => setEvalution(true)}>
                                Avalie
                            </button>
                            <button className="button-card-order" onClick={() => setDetails(true)}>
                               Saber mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalEvalution
                show={showEvalution}
                onHide={hideEvalution}
                name={name}
            />

            <ModalDetails
                show={showDetails}
                onHide={hideDetails}
                name={name}
                description={description}
                evaluation={evaluation}
                instagram={instagram}
                whatsapp={whatsapp}
                locality={locality}
                number={number}
                complements={complements}
                city={city}
                uf={uf}
            />
        </div>

    );
}
