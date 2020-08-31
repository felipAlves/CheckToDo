import React from 'react'

import './styles.css'

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <form>
                    <h1>Cadastre-se</h1>
                    <input maxLength="120" placeholder="Nome"/>
                    <input maxLength="20" placeholder="Username"/>
                    <input maxLength="30" type="password" placeholder="Senha"/>

                    <button className="button">Cadastrar</button>
                </form>
                <section>
                    <p>Organize suas tarefas diárias de forma rápida e prática.</p>
                </section>
            </div>
        </div>
    )
}
