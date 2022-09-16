import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Spells = () => {
    const [spellData, setSpelldata] = useState([])

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
                    <Card>
                        <Link to={'/spell/' + spell.index}>
                            <p>{spell.name}</p>
                            <Gradiant />
                        </Link>
                    </Card>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
        /* height: auto; */
    }

    p {
        z-index: 10;
        color: white;
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
`

const Gradiant = styled.div`
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Spells
