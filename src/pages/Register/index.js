import React, { useState, useEffect, useRef } from 'react';

import { Button, Container, Form, Col, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { debounce } from 'lodash';

import { Formik } from 'formik';

import './register.css';
//import api from '../../services/api';
import { validateCNPJ } from '../../utils';

export default function Register(props) {

    const [categories, setCategories] = useState([
        {
            category_id: 1,
            name_category: 'Sorveteria'
        },
        {
            category_id: 2,
            name_category: 'Farmácia'
        },
        {
            category_id: 3,
            name_category: 'Restaurante'
        }
    ])

    const debouncedCep = useRef(
        debounce(async (cep, setFieldValue) => {

            if (cep.length < 8) return

            const data = await getCep(cep)

            if (!data) return

            setFieldValue('city', data.localidade)
            setFieldValue('uf', data.uf)

        }, 500)
    ).current

    /* useEffect(
        () => {
            getCategories()
        },
        []
    ) */

    const handleSubmit = async (values) => {
        
        const {
            cnpj, 
            name,
            category_id,
            email,
            instagram,
            whatsapp,
            locality,
            number,
            /* cep, */
            city,
            uf,
            file,
            password,
        } = values;
        try {

            var formData = new FormData();
            formData.append('cnpj', cnpj);
            formData.append('name', name);
            formData.append('category_id', category_id);
            formData.append('instagram', instagram);
            formData.append('whatsapp', whatsapp);
            formData.append('locality', locality);
            formData.append('number', number);
            formData.append('city', city);
            formData.append('uf', uf);
            formData.append('file', file);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('description','');

           // await api.post('/company', formData)
            props.history.push('/home')
        }
        catch (error) {
            console.log(error)
        }
    }

    const getCategories = async () => {
        /* try {
            const { data } = await api.get('category')
            setCategories(data)
        }
        catch (err) {
            console.log(err)
        } */
    }

    const getCep = async (cep) => {
        /* try {
            const { data } = await api.get(`https://viacep.com.br/ws/${cep.replace('-', '').trim()}/json`)
            return data
        } catch (error) {
            console.log(error)
            return null
        } */
    }

    const handleValidate = values => {
        const errors = {};
        const requiredMsg = 'Campo obrigatório!'

        if (!values.name) {
            errors.name = 'Digite o nome da sua empresa!';
        }

        if (!values.email) {
            errors.email = requiredMsg;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'E-mail inválido!';
        }

        if (!values.category_id) {
            errors.categories = requiredMsg
        }

        if (!values.cep) {
            errors.cep = requiredMsg
        }

        if (!values.cnpj) {
            errors.cnpj = requiredMsg
        } else if (!validateCNPJ(values.cnpj)) {
            errors.cnpj = "CNPJ inválido!"
        }

        if (!values.uf) {
            errors.uf = requiredMsg
        }

        if (!values.city) {
            errors.city = requiredMsg
        }

        if (!values.locality) {
            errors.locality = requiredMsg
        }

        if (!values.instagram) {
            errors.instagram = requiredMsg
        }

        if (!values.whatsapp) {
            errors.whatsapp = requiredMsg
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
                <h3> Faça parte da revolução digital! </h3>
                <Formik
                    initialValues={{
                        name: '',
                        cnpj: '',
                        category_id: 0,
                        email: '',
                        instagram: '',
                        whatsapp: '',
                        sale_model: '',
                        locality: '',
                        number: 0,
                        cep: '',
                        city: '',
                        uf: 0,
                        complements: '',
                        plan_id: 0,
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
                                <Form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
                                    <section>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Nome: </Form.Label>
                                                <Form.Control type="text" placeholder="nome da empresa" name="name" value={values.name} onChange={handleChange} isInvalid={!!errors.name} />
                                                {
                                                    errors.name
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }

                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridCnpj">
                                                <Form.Label>CNPJ: </Form.Label>
                                                <Form.Control type="text" placeholder="000.000.000-00" name="cnpj" value={values.cnpj} onChange={handleChange} isInvalid={!!errors.cnpj} />
                                                {
                                                    errors.cnpj
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.cnpj}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCategoria">
                                                <Form.Label>Categoria: </Form.Label>
                                                <Form.Control as="select" name="category_id" value={values.category_id} onChange={handleChange} isInvalid={!!errors.categories}>
                                                    <option value="0">Escolha uma categoria</option>
                                                    {
                                                        categories.map(item => (
                                                            <option value={item.id} key={item.id}>{item.name_category}</option>
                                                        ))
                                                    }
                                                </Form.Control>
                                                {
                                                    errors.categories
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.categories}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>
                                        </Form.Row>
                                    </section>

                                    <section>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCategoria">
                                                <Form.Label>CEP: </Form.Label>
                                                <Form.Control type="number" placeholder="" name="cep" value={values.cep} onChange={(event) => {
                                                    const cep = event.target.value
                                                    setFieldValue('cep', cep)
                                                    debouncedCep(cep, setFieldValue)
                                                }} isInvalid={!!errors.cep} />
                                                {
                                                    errors.cep
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.cep}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridTipo">
                                                <Form.Label>Logradouro: </Form.Label>
                                                <Form.Control type="text" placeholder="Rua, avenida ..." name="locality" value={values.locality} onChange={handleChange} isInvalid={!!errors.locality} />
                                                {
                                                    errors.locality
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.locality}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>

                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Número: </Form.Label>
                                                <Form.Control type="text" placeholder="" name="number" value={values.number} onChange={handleChange} />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Cidade: </Form.Label>
                                                <Form.Control type="text" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                                                {
                                                    errors.city
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Estado: </Form.Label>
                                                <Form.Control as="select" name="uf" value={values.uf} onChange={handleChange} isInvalid={!!errors.city}>
                                                    <option> AC </option>
                                                    <option> AL </option>
                                                    <option> AP </option>
                                                    <option> AM </option>
                                                    <option> BA </option>
                                                    <option> CE </option>
                                                    <option> DF </option>
                                                    <option> ES </option>
                                                    <option> GO </option>
                                                    <option> MA </option>
                                                    <option> MT </option>
                                                    <option> MS </option>
                                                    <option> MG </option>
                                                    <option> PA </option>
                                                    <option> PB </option>
                                                    <option> PR </option>
                                                    <option> PE </option>
                                                    <option> PI </option>
                                                    <option> RJ </option>
                                                    <option> RN </option>
                                                    <option> RS </option>
                                                    <option> RO </option>
                                                    <option> RR </option>
                                                    <option> SC </option>
                                                    <option> SP </option>
                                                    <option> SE </option>
                                                    <option> TO </option>
                                                </Form.Control>
                                                {
                                                    errors.uf
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.uf}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridInstagram">
                                                <Form.Label>Instagram: </Form.Label>
                                                <Form.Control type="text" placeholder="@exemplo" name="instagram" value={values.instagram} onChange={handleChange} isInvalid={!!errors.instagram} />
                                                {
                                                    errors.instagram
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.instagram}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridWthasApp">
                                                <Form.Label>WhatsApp: </Form.Label>
                                                <Form.Control type="text" placeholder="(00) 0000-0000" name="whatsapp" value={values.whatsapp} onChange={handleChange} isInvalid={!!errors.whatsapp} />
                                                {
                                                    errors.whatsapp
                                                        ? (
                                                            <Form.Control.Feedback type="invalid">{errors.whatsapp}</Form.Control.Feedback>
                                                        )
                                                        : null
                                                }
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label> Selecione sua imagem: </Form.Label>
                                                <input type="file" name="file" id="file" onChange={(event) => {
                                                    const image = event.currentTarget.files[0]
                                                    setFieldValue('file', image);
                                                    
                                                }}/> 
                                            </Form.Group>
                                        </Form.Row>  
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridTipo">
                                                <Form.Label> Modelo de vendas: </Form.Label>
                                                <Form.Control as="select" name="sale_model" value={values.sale_model} onChange={handleChange}>
                                                    <option value={1}>
                                                        Apenas em loja virtual (vendas somente pelo instagram. Não tenho loja física)
                                                    </option>
                                                    <option value={2}>
                                                        Apenas em loja física ( Vendas somente na(s) loja(s). )
                                                    </option>
                                                    <option value={3}>
                                                        Loja virtual e física (Vendas em loja física e por instagram.)
                                                    </option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>

                                            <Form.Group as={Col} id="formGridPlan">
                                                <Form.Label> PLANO: </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="Básico"
                                                        name="basic"
                                                        id="basic"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Clássico"
                                                        name="classic"
                                                        id="classic"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Premiun"
                                                        name="premiun"
                                                        id="premiun"
                                                    />
                                                </Col>
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
                                            Cadastrar minha empresa
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
