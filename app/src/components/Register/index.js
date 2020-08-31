import React from 'react'

import './styles.css'

export default function Register() {
    return(
        <div className="register-container">
            <div className="content">
                <form>
                    <h1>Cadastre-se</h1>
                    <input placeholder="Nome"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>
                </form>
                <section>
                    <p>Organize suas tarefas diárias de forma rápida e prática.</p>
                </section>
            </div>
        </div>
    )
}
