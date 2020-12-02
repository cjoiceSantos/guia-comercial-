import React, {useEffect, useState} from 'react'

import Content from '../../components/content/content';
import './search.css';
import api from '../../services/api';

export default function Search() {

    const [companies, setCompanies] = useState([]);
    const [companies_count, setCompaniesCount] = useState(0);
    const [name_category, setNameCategory] = useState("");

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');


    useEffect(
        async () => {
            if(category != null){
                const response = await api.get(`company/category/${category}`);
                setCompanies(response.data);
                setCompaniesCount(response.data.length);
                if(response.data.length != 0){
                    setNameCategory(response.data[0].name_category);
                } 
            }
        }
        , []
    );    

    return (
        <Content 
            title= { 
               ( name_category != '' 
                    ? `Categoria ${name_category}`
                    :  'Nenhum resultado encontrado.' 
                )}   
            companies= {companies}
            companies_count = {companies_count}
        />
    );
    
}

