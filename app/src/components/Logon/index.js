import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Logon() {
    return(
        <div className="logon-container">
            <section>
                <form>
                    <h1>Faça seu Login</h1>
                    <input maxLength="20" placeholder="Username"/>
                    <input maxLength="30" type="Password" placeholder="Senha"/>
                    <button className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                       <FiLogIn size={16} /> Não tenho cadastro
                    </Link>  
                </form>
            </section>
            
        </div>
    )
}