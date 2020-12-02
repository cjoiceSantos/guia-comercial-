import React from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import api from '../../services/api';
//import { validateCPF } from '../../utils';

// import { Container } from './styles';

function RegisterUser(props) {

  const handleSubmit = async values => {
    const {
      first_name,
      last_name,
      cpf,
      birth_date,
      gender,
      email,
      password,
      file, 
    } = values;

    try {
      var formData = new FormData();
      formData.append('cpf', cpf);
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('birth_date', birth_date);
      formData.append('gender',gender);
      formData.append('file', file);
      formData.append('email', email);
      formData.append('password', password);
      
      await api.post('/user', formData)
      props.history.push('/home')
  }
  catch (error) {
      console.log(error)
  }

   }
  
  const handleValidate = values => { 
    const errors = {};
    const requiredMsg = 'Campo obrigatório!'

    if (!values.first_name) {
        errors.first_name = 'Digite seu primeiro nome';
    }

    if (!values.last_name) {
      errors.last_name = 'Digite seu sobrenome';
    }

    if (!values.email) {
        errors.email = requiredMsg;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido!';
    }

    if (!values.cpf) {
        errors.cpf = requiredMsg
    } /* else if (!validateCPF(values.cpf)) {
        errors.cpf = "CPF inválido!"
    } */

    if (!values.gender) {
      errors.gender = 'Informe seu gênero';
    }

    if (!values.password) {
        errors.password = requiredMsg
    }

    if (!values.confirm_password) {
        errors.confirm_password = requiredMsg
    } else if (values.confirm_password !== values.password) {
        errors.confirm_password = "Senhas não conferem!"
    }

    return errors;
  }

  return (
    <Container className="form-register">
      <div className="form-register">
        <Formik
          initialValues={{
            first_name: '',
            last_name:'',
            cpf: '',
            birth_date: '',
            gender: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validate={handleValidate}
          validateOnChange={false}
        >
          {
            ({
              values,
              errors,
              handleSubmit,
              handleChange,
              setFieldValue
            }) => (
                <Form onSubmit={handleSubmit}>
                  <section>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control type="text" placeholder="Seu primeiro nome" name="first_name" value={values.first_name} onChange={handleChange} isInvalid={!!errors.first_name} />
                        {
                          errors.first_name
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.first_name}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Sobrenome: </Form.Label>
                        <Form.Control type="text" placeholder="Seu sobrenome" name="last_name" value={values.last_name} onChange={handleChange} isInvalid={!!errors.last_name} />
                        {
                          errors.last_name
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF: </Form.Label>
                        <Form.Control type="text" placeholder="000.000.000-00" name="cpf" value={values.cpf} onChange={handleChange} isInvalid={!!errors.cpf} />
                        {
                          errors.cpf
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridBirthDate">
                          <Form.Label> Data de nascimento: </Form.Label>
                          <Form.Control type="text" onKeyUp={(event) => {
                            const v = event.target.value;
                            if (v.match(/^\d{2}$/) !== null) {
                              event.target.value = v + '/';
                            } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
                              event.target.value = v + '/';
                            }
                          }} maxlength="10" placeholder="Ex.: 12/12/2012" name="birth_date" value={values.birth_date} onChange={handleChange} isInvalid={!!errors.birth_date} />
                          {
                            errors.birth_date
                              ? (
                                <Form.Control.Feedback type="invalid">{errors.birth_date}</Form.Control.Feedback>
                              )
                              : null
                          }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridGender">
                          <Form.Label> Gênero: </Form.Label>
                            <Form.Control as="select" name="gender" value={values.gender} onChange={handleChange} isInvalid={!!errors.gender}>
                                <option value="0"> Selecione o seu gênero </option>
                                <option value="male"> Masculino </option>
                                <option value="female"> Feminino </option>
                                <option value="other"> Outro </option>
                               
                            </Form.Control>
                            {
                                errors.gender
                                    ? (
                                        <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                                    )
                                    : null
                            }
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFile" >
                        <Form.Label> Selecione sua foto de perfil: </Form.Label>
                        <br/>
                        <input type="file" name="file" id="file" onChange={(event) => {
                            const image = event.currentTarget.files[0]
                            setFieldValue('file', image);
                            
                        }}/> 
                      </Form.Group>
                    </Form.Row>
                  </section>
                  <section>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type='email' placeholder="example@example.com" name="email" value={values.email} onChange={handleChange} isInvalid={!!errors.email} />
                        {
                          errors.email
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPass">
                        <Form.Label>Senha: </Form.Label>
                        <Form.Control type='password' name="password" value={values.password} onChange={handleChange} isInvalid={!!errors.password} />
                        {
                          errors.password
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridConfirmPass">
                        <Form.Label>Confirme a senha: </Form.Label>
                        <Form.Control type='password' name="confirm_password" value={values.confirm_password} onChange={handleChange} isInvalid={!!errors.confirm_password} />
                        {
                          errors.confirm_password
                            ? (
                              <Form.Control.Feedback type="invalid">{errors.confirm_password}</Form.Control.Feedback>
                            )
                            : null
                        }
                      </Form.Group>
                    </Form.Row>
                    <Button variant="light" type="submit">
                      Me cadastrar 
                    </Button>
                  </section>
                </Form>
              )
          }
        </Formik>
      </div>
    </Container >
  );
}

export default RegisterUser;
