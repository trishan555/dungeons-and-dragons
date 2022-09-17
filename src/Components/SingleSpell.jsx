import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleSpell = ({ spell }) => {
    const { cart, setCart } = CartState()

    return (
        <div>
            <Card>
                <Link to={'/spell/' + spell.index}>
                    <p>{spell.name}</p>{' '}
                </Link>

                {cart.includes(spell) ? (
                    <Button
                        onClick={() =>
                            setCart(cart.filter((c) => c.index !== spell.index))
                        }
                    >
                        <AiFillHeart />
                    </Button>
                ) : (
                    <Button onClick={() => setCart([...cart, spell])}>
                        <AiOutlineHeart />{' '}
                    </Button>
                )}
            </Card>
        </div>
    )
}

const Button = styled.button`
    margin-right: 1rem;
    border: 1px solid black;
    color: #313131;
    background-color: #fdfdfd;
    font-weight: 500;
    padding: 10px 10px;
    border-radius: 100%;

    cursor: pointer;
    &:hover {
        background-color: #171313;
        color: white;
    }
    svg {
        font-size: 1.3rem;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    &:active {
        background-color: crimson;
    }

    @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
        svg {
            font-size: 1rem;
        }
    }
    @media only screen and (min-device-width: 426px) and (max-device-width: 768px) {
        svg {
            font-size: 1rem;
        }
    }
`

const Card = styled.div`
    box-shadow: 0px 0px 0px 0px rgba(235, 202, 202, 0.973),
        3px 2px 8px 0px rgba(241, 225, 225, 0.966);
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    border-radius: 2rem;
    border: 1px solid;
    margin-bottom: 0.5rem;
    p {
        margin-left: 3rem;
    }

    a {
        color: black;
        text-decoration: none;
    }

    @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
        margin: 0rem 1rem;
        min-height: 4rem;
        border-radius: 1.5rem;
    }
    @media only screen and (min-device-width: 426px) and (max-device-width: 768px) {
        min-height: 4rem;
        border-radius: 1.5rem;
    }
`

export default SingleSpell
