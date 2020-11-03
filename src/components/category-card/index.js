import React, { Component } from 'react';

import './category-card.css'

export default class CategoryCard extends Component {
  render(props) {
    const { image, name } = this.props

    return (
      <div className="categorycard__container">
        <img src={image} alt={name} /> 
        <h3>
          {name}
        </h3>
      </div>
    );
  }
}
