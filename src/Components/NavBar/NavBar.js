import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Golosinas</a>
                    </li>
                    <li>
                        <a>Chocolates</a>
                    </li>
                    <li>
                        <a>Alfajores</a>
                    </li>
                    <li>
                        <a>Bebidas</a>
                    </li>
                    <li>
                        <a><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar