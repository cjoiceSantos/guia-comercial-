import React from 'react';

import CompanyCard from "../company-card/company-card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./content.css";
//import api from "../../services/api";

export default function Content({title, companies, companies_count}){  
    return (
        <div id="content-companies">
            <div className="infor-search">
                <h4> {title}  </h4>
                {
                    companies_count == ""
                        ? <h4></h4>
                        : <h4 id="count-search"> 
                            ({companies_count} 
                            { companies_count != 1 ? " resultados" : " resultado"}) 
                        </h4>
                }    
            </div>
            <Container>
                <Row>
                    {
                        companies.map(company => (
                            <Col md={4} key = {company.company_id}>
                                <CompanyCard 
                                    name={company.name}
                                    description= {company.description}
                                    evaluation = {company.evaluation}
                                    category= {company.name_category}  
                                    instagram = {company.instagram}
                                    whatsapp  = {company.whatsapp}
                                    locality =  {company.locality}
                                    number =  {company.number}
                                    complements =  {company.complements}
                                    city =  {company.city}
                                    uf =  {company.uf}
                                    image_name = {company.image_name}
                                />
                            </Col>  
                        ))
                    }      
                </Row>
            </Container>
        </div>
    );
} 

