import React from 'react'
import { Link } from 'react-router-dom'
import isAuth from '../../Utils/Authenticate/userAuth'

export default () => {
    return (
        <div className="not-found-container">
            <h1>Are You Lost ?</h1>
            <div>
                <Link className="link" to={isAuth() ? '/dashboard' : '/'}>Back To Home Page</Link>
            </div>
        </div>
    )
}
