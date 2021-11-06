import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './LogIn.css';

const CreateAccount = () => {

  const [formState, setFormState] = useState({firstName: '', lastName: '', email: '', password: ''});

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
          <img src={require('./../assets/images/Felicity.png')} width="100%" height="100%" alt="Felicity" />
          </div>
          <div className="text-center">
            <h2 className="h3 mb-3 font-weight-normal">Create Account</h2>
            <form onSubmit={handleFormSubmit}  className="form-signin">
              <input
                className='form-input form-signin'
                placeholder='First Name'
                name='firstName'
                type='firstName'
                id='firstName'
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className='form-input form-signin'
                placeholder='Last Name'
                name='lastName'
                type='lastName'
                id='lastName'
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                className='form-input form-signin'
                placeholder='Email Address'
                name='email'
                type='email create'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input form-signin'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn btn-lg btn-danger btn-block'>
                Submit
            </button>
            </form>
            {error && <div>Sign up failed.</div>}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateAccount;