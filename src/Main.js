import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'

var MainPageStyle = {
    width: '100%',
    height: '100%'
}

const Main = () => (
    <main style={MainPageStyle}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    </main>
)

export default Main