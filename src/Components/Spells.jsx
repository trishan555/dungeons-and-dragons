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
        <div>
            <h3>Popular Picks</h3>

            {spellData.map((spell) => {
                return (
                    <div>
                        <p>{spell.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Spells
