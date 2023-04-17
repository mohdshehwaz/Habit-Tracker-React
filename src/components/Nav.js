import React from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const dashboardClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className='nav'>
            <h1 onClick={dashboardClick}>Habit Tracker</h1>
            
        </div>
    )
}

export default Nav