import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import SingleSpell from './SingleSpell'

const Spells = () => {
    // const [spellData, setSpelldata] = useState([])
    const { cart, setCart, spellData, setSpelldata } = CartState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/spells`)
            const data = await response.json()

            setSpelldata(data.results)
            //console.log(cart)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h3>Popular Spells</h3>

            <Wrapper>
                {spellData.map((spell) => (
                    <SingleSpell spell={spell} key={spell.index} />
                ))}
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 3rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`

const Gradiant = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Spells
