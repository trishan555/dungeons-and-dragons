import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Spell = () => {
    const [details, setDetails] = useState({})
    const params = useParams()

    useEffect(() => {
        fetchDetails()
    }, [params.name])
    const fetchDetails = async () => {
        const response = await fetch(
            `https://www.dnd5eapi.co/api/spells/${params.name}`
        )
        const data = await response.json()
        setDetails(data)
        console.log(data)
    }

    return (
        <div>
            <h1>Hello</h1>
            <h3>{details.range}</h3>
        </div>
    )
}

export default Spell
