import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default function Register() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()


    async function handleRegister(e) {
        e.preventDefault()

        const response = await api.post('/register', {
            name,
            username,
            password
        })

        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('user_id', response.data.newUser._id)
        sessionStorage.setItem('username', response.data.newUser.username)

        history.push('/profile')
    }


    return(
        <div className="register-container">
            <div className="content">
                <form onSubmit={handleRegister}>
                    <h1>Cadastre-se</h1>
                    <input 
                        maxLength="120"
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                     />
                    <input 
                        maxLength="20" 
                        placeholder="Nome de usuário"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        maxLength="30" 
                        type="password" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className="back-link" to="/">
                       <FiArrowLeft size={16} /> Já tenho cadastro
                    </Link> 
                </form>
                <section>
                    <p>Organize suas tarefas diárias de forma rápida e prática.</p>
                </section>
            </div>
        </div>
    )
}
