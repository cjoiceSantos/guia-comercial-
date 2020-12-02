import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

import Category from '../../components/category/category';
import Content from '../../components/content/content';
import api from '../../services/api';

export default function Home() {

  const [companies, setCompanies] = useState([]);

  useEffect(
    () => {

      const fetchData = async () => {
        const response_company = await api.get('/company');
        setCompanies(response_company.data);
      }

      fetchData()

    }, []
  );

  return (
    <>
      <Category />
      <Fade bottom>
        <Content
          title="Empresas disponíveis"
          companies={companies}
          companies_count=''
        />
      </Fade>
    </>
  );
}
