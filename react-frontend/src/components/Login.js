// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginToken } from '../store/action/authActions';
import '../styles/login.css'

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            'http://localhost:4000/api/login',
            {
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if(response){
            setToken(response.data.token);
            dispatch(setLoginToken(response.data.token))
            navigate('/dashboard');
        }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div class="login-container">
        <form onSubmit={handleSubmit} class="login-form">
            <h2>Login</h2>
            <div class="input-container">
                <label for="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Enter your username"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </div>
            <div class="input-container">
                <label for="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;
