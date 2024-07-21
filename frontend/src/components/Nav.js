import React from 'react'
import {Link, useNavigate} from 'react-router-dom';


const Nav = ()=> {
    const isUserLogedOrSignedIn = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = ()=> {
        localStorage.clear()
        navigate('/signup')
    }

    return ( 
        
            <div className='nav-component'>
                { isUserLogedOrSignedIn ?
                <ul className='navulh'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/notes'>Notes</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link onClick={logout} to='/signup'>Logout</Link></li>
                </ul>
                : <ul className='navuls'>
                    <li><Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                }
            </div>
        
    )
}

export default Nav;
