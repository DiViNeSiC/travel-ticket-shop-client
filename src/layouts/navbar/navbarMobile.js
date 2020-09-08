import React from 'react'
import { Menu, Icon, Button, Dropdown } from "semantic-ui-react"
import { Link } from 'react-router-dom'

export default ({ handleLogout, loading, isAuth, pathName }) => (
    <Menu fixed="top">
        <Menu.Item>
            <Link to="/">
                <h3 className="nav-header"><Icon className="plane" /> Travel Shop</h3>
            </Link>       
        </Menu.Item>
        {isAuth && 
            <Dropdown text="Menu" icon="dropdown" className='link item'>
                <Dropdown.Menu>
                    {isAuth && pathName !== '/dashboard/cart' &&
                        <Dropdown.Item>
                            <Button 
                                className="mobile-nav-dropdown-btn" 
                                fluid 
                                as={Link} 
                                to="/dashboard/cart"
                            >
                                <div><Icon className="shopping cart" /> Cart </div>
                            </Button>
                        </Dropdown.Item>
                    }
                    {isAuth && pathName !== '/dashboard' &&
                        <Dropdown.Item>
                            <Button 
                                className="mobile-nav-dropdown-btn" 
                                fluid 
                                as={Link} 
                                to="/dashboard"
                            >
                                <Icon className="dashboard" />
                                Dashboard
                            </Button>
                        </Dropdown.Item> 
                    }
                    {isAuth && pathName !== '/dashboard/settings' &&
                        <Dropdown.Item>
                            <Button
                                className="mobile-nav-dropdown-btn" 
                                fluid 
                                as={Link} 
                                to="/dashboard/settings"
                            >
                                <Icon className="setting" />
                                Settings
                            </Button>
                        </Dropdown.Item>
                    }
                </Dropdown.Menu>
            </Dropdown>
        }
        <Menu.Menu position="right">
            {!isAuth && pathName !== '/login' &&
                <Menu.Item>
                    <Button className="responsive-sign-in" primary as={Link} to="/login">
                        <div>
                            <Icon className="sign in" />
                            Sign In!
                        </div>
                    </Button>
                </Menu.Item>
            }
            {!isAuth && pathName !== '/register' &&
                <Menu.Item>
                    <Button className="responsive-signup" positive as={Link} to="/register">
                        <div>
                            <Icon className="signup" />
                            Sign Up!
                        </div>
                    </Button>
                </Menu.Item>
            }
            {isAuth &&
                <Menu.Item >
                    <Button className="responsive-logout" onClick={handleLogout} loading={loading} negative>    
                        <Icon className="log out" />
                        LogOut
                    </Button>
                </Menu.Item>
            }
        </Menu.Menu>
    </Menu>
)