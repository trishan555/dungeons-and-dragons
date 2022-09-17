import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartState } from '../Context/Context'
import { BiShoppingBag } from 'react-icons/bi'
import { GiDrakkarDragon } from 'react-icons/gi'

const Header = () => {
    const { cart } = CartState()
    return (
        <Nav>
            <li>
                <Link to='/'>
                    <NewSpan>
                        <GiDrakkarDragon />
                        dungeonsdragons
                    </NewSpan>
                </Link>
            </li>
            <ListNew>
                <Link to='/favourite'>
                    <BiShoppingBag /> <span>{cart.length}</span>
                </Link>
            </ListNew>
        </Nav>
    )
}

const Nav = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    margin-top: 20px;
    margin-bottom: 20px;

    a {
        color: #381d1d;
        text-decoration: none;
    }

    svg {
        font-size: 3rem;
        color: black;
    }
`
const ListNew = styled.li`
    svg {
        font-size: 1.8rem;
    }
    span {
        position: absolute;
        top: 10px;
        right: -10px;
        background: crimson;
        font-size: 10px;
        color: white;
        padding: 5px 10px;
        border-radius: 100%;
        z-index: -1;
    }
`

const NewSpan = styled.span`
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    color: #ef2a2a;
`

export default Header
