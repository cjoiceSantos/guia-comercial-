import React from 'react';

import { Modal, Button,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });


export default class ModalEvalution extends React.Component{

    state = {
        labels : {
            0.5: 'Sem utilidade',
            1: 'Inútil',
            1.5: 'Muito fraco',
            2: 'Fraco',
            2.5: 'Aceitável',
            3: 'Razoável',
            3.5: 'Bom',
            4: 'Muito bom',
            4.5: 'Ótimo',
            5: 'Excelente',
        },
        value: 1,
        hover: -1,
    }
    
    render() {
        const { show, onHide, name } = this.props;
        const { labels,value,hover} = this.state;
       
       // const showmodal = this.setState({show_modal: show});
        return(
           
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title> Pedro, deixe seu feedback </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-company">
                        <div className="evaluation-star">
                            <h6> Como você avalia {name} ? </h6>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    this.setState({value: newValue});
                                }}
                                onChangeActive={(event, newHover) => {
                                    this.setState({hover: newHover});
                                }} 
                            />
                            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </div>
                        <h6> Deixe seu comentário:</h6>                    
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control as="textarea" placeholder="comente aqui" />
                            
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            avaliar <FontAwesomeIcon icon= {faCheckCircle}/>
                        </Button>
                        </Form> 
                    </div>
                </Modal.Body>
            </Modal>
        );    
    }
}