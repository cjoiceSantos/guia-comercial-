import React , {useState, useEffect} from 'react';

import { Container} from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CategoryCard from '../category-card';
import api from '../../services/api';
import "./category.css";

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
            api.get('category').then(response => {
                console.log(response);
                setCategories(response.data)
                if (response.data.length < 4) {
                    setSettings({
                        ...settings,
                        slidesToShow: response.data.length
                    })
                }
            });
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