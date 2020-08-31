import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Componentes

import Logon from './components/Logon'
import Register from './components/Register'
import Profile from './components/Profile'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}