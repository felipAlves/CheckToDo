import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

export default function Logon() {
    return(
        <div className="logon-container">
            <section>
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="E-mail" />
                    <input placeholder="Senha" />
                    <button className="button">Entrar</button>

                    <a className="back-link" href="#">
                       <FiLogIn size={16} /> Não tenho cadastro
                    </a>  
                </form>
            </section>
            
        </div>
    )
}