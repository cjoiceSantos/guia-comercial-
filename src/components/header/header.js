import React from "react";
import "./header.css";

import logo from '../../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCommentDollar, faAward, faSignInAlt, faMapMarkerAlt, faHome, faTags } from '@fortawesome/free-solid-svg-icons';


const Header = () => (
    <div id="main-header">
        <div id="image-logo">
            <img src={logo} alt="logo" />
        </div>

        <div id="search-field">
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <input type="text" placeholder="Busque por um estabelecimento" />
        </div>

        <div id="location">
            <span> SUA CIDADE </span>

            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="Secondary">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Montanhas - Rio Grand...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"> Mudar a cidade </Dropdown.Item>
                    <Dropdown.Item href="#/action-2"> Cidades cadastradas </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div id="nav-menu">
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/home">
                        <FontAwesomeIcon icon={faHome} /> Início
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/promocoes">
                        <FontAwesomeIcon icon={faCommentDollar} /> Promoções
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/destaques">
                        <FontAwesomeIcon icon={faAward} /> Destaques
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">
                        <FontAwesomeIcon icon={faSignInAlt} /> Entrar
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>

);

export default Header;
