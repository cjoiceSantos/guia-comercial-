import React , {useState, useEffect} from 'react';

import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CategoryCard from '../category-card';
import "./category.css";

import image from '../../images/sorveteria.jpg'
import {Link, useHistory}  from 'react-router-dom';

export default function Category () {

    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [link, setLink] = useState(''); 
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
    });

   
   useEffect( 
        () => { 
                setCategories(
                    [
                        {id:'1', name_category: 'Sorveteria', image_name: image},
                        {id:'2', name_category: 'Supermercado', image_name: image},
                        {id:'3', name_category: 'Barbearia', image_name: image},
                        {id:'4', name_category: 'Farmácia', image_name: image},
                        {id:'5', name_category: 'Lanchonete', image_name: image},
                        {id:'6', name_category: 'Vestuário', image_name: image}
                    ]
                )   
        }, []
    );
    return (
        <div id="categories">
            <div id="carousel-categories">
                <h4> Categorias </h4>
                <Container style={{ marginTop: 10 }}>
                    <Slider {...settings}>    
                        {
                            categories.map( category => (                     
                                <Link to= {`/search?category=${category.id}`} > 
                                     <div style={{ width: 230 }} key={category.id}>
                                        <CategoryCard 
                                            name={category.name_category}
                                            image={category.image_name}
                                        />
                                    </div>
                                </Link>           
                            ))
                        }
                    </Slider>
                </Container>
            </div>
        </div>
    );
}