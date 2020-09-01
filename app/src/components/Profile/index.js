import React from 'react'

import './styles.css'
import { useHistory } from 'react-router-dom'

export default function Profile() {
    const username = sessionStorage.getItem('username') 

    return(
        <div className="profile-container">
            <div className="content">
                <h1>Bem vindo {username}</h1>
            </div>
        </div>
    )
}