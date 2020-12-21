import React from 'react'
import uuid from 'uuid/v4'
import routes from './Routes/routes'
import RenderRoute from './Routes/renderRoutes'
import Navbar from './Components/Navbar/NavbarComponent'
import { Switch, HashRouter as Router } from 'react-router-dom'
import { GlobalProvider } from './Context/ContextProvider/provider'

import './Assets/Css/main.css'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import 'semantic-ui-css/semantic.min.css'

export default () => (
    <GlobalProvider>
        <Router>
            <div className="main-container">
                <Navbar />
                <div className="app-container">
                    <Switch>
                        {routes.map((route) => <RenderRoute key={uuid()} {...route} />)}
                    </Switch>
                </div>
            </div>
        </Router>
    </GlobalProvider>
)