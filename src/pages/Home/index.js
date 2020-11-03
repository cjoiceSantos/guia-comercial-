import React, { useEffect, useState }  from 'react';
import Category from '../../components/category/index';
import Content from '../../components/content/content';
import { Fade } from 'react-reveal';
import image from '../../images/morena.jpg'

export default function Home() {
    const [companies, setCompanies] = useState([]);
    
    useEffect(
        () => {
          setCompanies(
          [
              { company_id: '1',
              name: 'Sorveteria da Maria',
              description: 'mais variedades e qualidade da cidade',
              evaluation: 5,
              category: 'sorveteria',
              instagram: '@sorvetedamaria',
              whatsapp  : '(84) 0000-0000',
              locality :  'Rua dos bobos',
              number :  '0',
              complements : '',
              city :  'Montanhas',
              uf :  'RN',
              image_name : ''
              },
              { company_id: '1',
              name: 'Sorveteria da Maria',
              description: 'mais variedades e qualidade da cidade',
              evaluation: 5,
              category: 'sorveteria',
              instagram: '@sorvetedamaria',
              whatsapp  : '(84) 0000-0000',
              locality :  'Rua dos bobos',
              number :  '0',
              complements : '',
              city :  'Montanhas',
              uf :  'RN',
              image_name : ''
              },
              { company_id: '1',
              name: 'Sorveteria da Maria',
              description: 'mais variedades e qualidade da cidade',
              evaluation: 5,
              category: 'sorveteria',
              instagram: '@sorvetedamaria',
              whatsapp  : '(84) 0000-0000',
              locality :  'Rua dos bobos',
              number :  '0',
              complements : '',
              city :  'Montanhas',
              uf :  'RN',
              image_name : ''
              }
          ])
    
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
  