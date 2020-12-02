import React, {useState, useEffect} from 'react';

import Content from "../../components/content/content";
import api from "../../services/api";

export default function Highlights() {
    
    const [companies, setCompanies] = useState([]);

    useEffect(
        async () => {
            const response = await api.get('company/evaluations');
            setCompanies(response.data);
        }, []
    );

    return (
        <Content 
            title= "Com as melhores avaliações:" 
            companies= {companies}
            companies_count = ''
        />
    );
}