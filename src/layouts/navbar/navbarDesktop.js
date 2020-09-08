import React from 'react'
import { Menu, Icon, Button } from "semantic-ui-react"
import { Link } from 'react-router-dom'

export default ({ handleLogout, loading, pathName, isAuth }) => (
    <Menu fixed="top">
        <Menu.Item>
            <Link to="/">
                <h1><Icon className="plane" /> Travel Shop</h1>
            </Link>         
        </Menu.Item>
        <Menu.Menu position="left">
            {isAuth && pathName !== '/dashboard/cart' && 
                <Menu.Item>
                    <Button className="nav-cart-btn" as={Link} to="/dashboard/cart">
                        <div><Icon size="large" className="opencart" /></div>
                    </Button>
                </Menu.Item>
            }
            {isAuth && pathName !== '/dashboard' &&
                <Menu.Item position="left">
                    <Button className="nav-dashboard-btn" as={Link} to="/dashboard">
                        <div>
                            <Icon className="dashboard" />
                            Dashboard
                        </div>
                    </Button>
                </Menu.Item>
            }
        </Menu.Menu>
        <Menu.Menu position="right">
            {isAuth && pathName !== '/dashboard/settings' &&
                <Menu.Item>
                    <Button primary as={Link} to="/dashboard/settings">
                        <div>
                            <Icon className="setting" />
                            Settings
                        </div>
                    </Button>
                </Menu.Item>
            }
            {!isAuth && pathName !== '/login' &&
                <Menu.Item>
                    <Button primary as={Link} to="/login">
                        <div>
                            <Icon className="sign in" />
                            Sign In!
                        </div>
                    </Button>
                </Menu.Item>
            }
            {!isAuth && pathName !== '/register' &&
                <Menu.Item>
                    <Button positive as={Link} to="/register">
                        <div>
                            <Icon className="signup" />
                            Sign Up!
                        </div>
                    </Button>
                </Menu.Item>
            }
            {isAuth &&
                <Menu.Item>
                    <Button onClick={handleLogout} loading={loading} negative>
                        <div>
                            <Icon className="log out" />
                            Log Out
                        </div>
                    </Button>
                </Menu.Item>
            }
        </Menu.Menu>
    </Menu>
);