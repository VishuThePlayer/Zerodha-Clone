import React from 'react'

function Menu() {
    return ( 
        <>
            <div className="menu-container">
                <ul className="navbar-nav mx-auto gap-lg-4">
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Dashboard</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Orders</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Holdings</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Positions</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Funds</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-link p-0">Apps</button>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default Menu;