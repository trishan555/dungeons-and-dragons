import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/favouriteContext'

const Spells = () => {
    const [spellData, setSpelldata] = useState([])
    const { cart, setCart } = CartState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(`https://www.dnd5eapi.co/api/spells`)
        const data = await response.json()

        setSpelldata(data.results)
        console.log(data.results)
    }

    return (
        <Wrapper>
            <h3>Popular Picks</h3>

            {spellData.map((spell) => {
                return (
                    <Card key={spell.index}>
                        <p>
                            <Link to={'/spell/' + spell.index}>
                                {' '}
                                {spell.name}
                            </Link>
                            <span>
                                {cart.includes(spell) ? (
                                    <Button
                                        onClick={() =>
                                            setCart(
                                                cart.filter(
                                                    (c) =>
                                                        c.index !== spell.index
                                                )
                                            )
                                        }
                                    >
                                        Remove from Cart
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() =>
                                            setCart([...cart, spell])
                                        }
                                    >
                                        Add to Cart
                                    </Button>
                                )}
                            </span>
                        </p>
                    </Card>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Button = styled.button`
    margin-left: 2rem;
    border: 2px solid black;
    color: #313131;
    background-color: white;
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: 1rem;
    cursor: pointer;
`

const Card = styled.div`
    min-height: 10rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    border: 1px solid;
    margin-bottom: 0.3rem;
    p {
        z-index: 10;
        color: #150606;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: absolute;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        left: 50%;
        bottom: 10%;
        transform: translate(-50%, 0);
    }
    a {
        color: black;
        text-decoration: none;
    }
`

const Gradiant = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Spells
