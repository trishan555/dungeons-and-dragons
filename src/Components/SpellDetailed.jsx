import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const SpellDetailed = () => {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
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
            <h3>{details.name}</h3>
            <DetailWrapper>
                <Info>
                    <p>{details.desc}</p>
                    {/* <p>{details.subclasses.name}</p> */}
                    {/* <p>{details.school.name}</p> */}
                </Info>
            </DetailWrapper>
        </div>
    )
}

const DetailWrapper = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 3rem;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`
const Button = styled.button`
    margin-right: 2rem;
    border: 2px solid black;
    color: #313131;
    background-color: white;
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: 1rem;
`

const Image = styled.img`
    max-width: 100%;
    border-radius: 2rem;
`

const Info = styled.div`
    font-weight: 400;

    p {
        margin: 2rem 0rem;
    }

    ul {
        margin: 2rem 0rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: black;
        text-decoration: none;
    }
`

export default SpellDetailed
