
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-reveal';

import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';

import './login.css'
//import api from '../../services/api';
//import { signIn } from '../../services/auth';

class Login extends Component {

  state = {
    isLoading: false,
  }

  handleSubmit = async (values, { setErrors }) => {
    /* try {
      this.setState({ isLoading: true })
      const { data } = await api.post('/auth/login', values);

      signIn(data.accessToken)

      this.props.history.push('/admin');

    } catch (err) {
      console.log(err)
      setErrors({
        email: "Email ou senha inválidos"
      })
    }
 */
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <Container className="d-flex justify-content-md-center">
        <Fade bottom>
          <section className="login__container">
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={this.handleSubmit}
            >
              {
                ({
                  values,
                  errors,
                  handleChange,
                  handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          value={values.email}
                          onChange={handleChange} />
                        {
                          errors.email
                          && (
                            <span className="form-error">{errors.email}</span>
                          )
                        }
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Senha</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Senha"
                          value={values.password}
                          onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <Button type="submit" block>
                          {
                            this.state.isLoading
                              ? <FontAwesomeIcon icon={faSyncAlt} spin />
                              : 'Entrar'
                          }
                        </Button>
                      </div>
                      <div className="form-group text-center">
                        <span>ou</span>
                      </div>
                      <div className="form-group">
                        <Button variant="outline-primary" block as={NavLink} to="/choice-profile">
                          Cadastre-se agora!
                      </Button>
                      </div>
                    </form>
                  )
              }
            </Formik>
          </section>
        </Fade>
      </Container>
    );
  }
}

export default withRouter(Login);
