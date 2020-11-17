import React,  { useEffect, useState }  from 'react'

import Content from '../../components/content/content'

export default function Highlight() {

    const [companies, setCompanies] = useState([
        {    company_id: '1',
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
    ]);

        return (
            <div id = "div-highlights">
                <Content 
                    title="Com as melhores avaliações" 
                    type="highlight" 
                    companies={companies}
                    companies_count = ''
                />
            </div>
        );
}