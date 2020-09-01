import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import Logo from '../../assets/logo.png'

import './styles.css'

export default function Logon() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogon(e) {
        e.preventDefault()

        const response = await api.post('/logon', {
            username,
            password
        })
        
        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('user_id', response.data._id)
        sessionStorage.setItem('username', response.data.username)

        history.push('/profile')

    }

    return(
        <div className="logon-container">
            <div className="logo">
                <img src={Logo} alt="ToDoCheck"/>
                <h1>ToDoCheck</h1>
            </div>
            <div className="content">
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Login</h1>
                    <input 
                        maxLength="20" 
                        placeholder="Nome de usuário"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        maxLength="30" 
                        type="Password" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} /> Não tenho cadastro
                    </Link>  
                </form>
            </div>
            
        </div>
    )
}