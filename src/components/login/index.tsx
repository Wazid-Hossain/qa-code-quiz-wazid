import React, { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/auth';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgba(247, 247, 247, 0.4);
    width: 40%;
    height: 85%;
`;

const Input = styled.input`
    width: 90%;
    height: 8%;
    text-align: center;
    border-radius: 15px;
    font-family: 'Courier New', Courier, monospace;
    border: solid 2px #048abf;
    padding: 15px;
    margin-bottom: 20px;
    transition: border-color 0.2s ease-in;
    :focus {
        outline: none;
        border-color: #f54458;
    }
`;

const Button = styled.button`
    background-color: #048abf;
    border: none;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 15px;
    width: 50%;
    height: 7%;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5em;
    font-weight: light;
    color: white;
    transition: background-color 0.1s ease-in;
    outline: none;
    :active {
        background-color: #f54458;
    }
`;

export default () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useContext(AuthContext);

    return (
        <LoginContainer>
            <Input
                data-testid="username-input"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                data-testid="password-input"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                data-testid="login-button"
                onClick={() => login(username, password)}
            >
                LOGIN
            </Button>
            <div>If you do not have an account, contact an admin</div>
        </LoginContainer>
    );
};
