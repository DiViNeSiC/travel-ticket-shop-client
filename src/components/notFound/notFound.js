import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="not-found-container">
            <h1>
                Are You Lost ???
            </h1>
            <div>
                <Link className="link" to="/" >Back To Products</Link>
            </div>
        </div>
    )
}
