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
    background-color: white;
    padding: 1rem 2rem;
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
`

const Card = styled.div`
    min-height: 5rem;
    display: flex;
    justify-content: space-between;

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
`

export default SingleSpell
