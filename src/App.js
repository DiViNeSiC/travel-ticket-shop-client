import React from 'react'
import { Switch, HashRouter as Router } from 'react-router-dom'
import { GlobalProvider } from './context/contextProvider/provider'
import routes from './routes/routes'
import RenderRoute from './routes/renderRoutes'
import NavBar from './components/navbar/navbar'
import uuid from 'uuid/v4'

import './assets/css/main.css'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import 'semantic-ui-css/semantic.min.css'


export default () => {
    return (
        <GlobalProvider>
            <Router>
                <div className="main-container">
                    <NavBar />
                    <div className="app-container">
                        <Switch>
                            {routes.map((route) => (
                                <RenderRoute 
                                    key={uuid()}
                                    {...route} 
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </GlobalProvider>
    )
}