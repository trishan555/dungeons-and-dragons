import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Nav>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favourite'>Favourite ({0})</Link>
                </li>
            </Nav>
        </div>
    )
}

const Nav = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    margin-top: 0;

    a {
        color: black;
        text-decoration: none;
    }
`

export default Header
