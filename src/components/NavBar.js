import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-primary'>
            <div className='container-fluid'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-brand text-white'>Car-Rentals</Link>
                    <form className='form-inline'>
                        <Link to='/search' className='text-white btn btn-success'>Start New Booking</Link>
                    </form>
                </nav>
            </div>
        </div>
    )
}

export default NavBar