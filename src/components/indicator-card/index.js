import React, { Component } from 'react';

import './indicator-card.css'

import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default class IndicatorCard extends Component {
  render() {
    const { title, info, indicator } = this.props
    return (
      <Card
        bg='Light'
        text={'dark'}
      >
        <Card.Body>
          <Card.Title>
            {title}&nbsp;
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  {info}
                </Tooltip>
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} size="sm" />
            </OverlayTrigger>
          </Card.Title>
          <Card.Text>
            <span className="indicator__number">{indicator}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
