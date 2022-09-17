import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const SpellDetailed = () => {
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
        //console.log(data)
    }

    return (
        <div>
            <h3>{details.name}</h3>
            <DetailWrapper>
                <Info>
                    <div>
                        <h4>Description</h4>
                        <p>{details.desc}</p>
                    </div>
                    <div>
                        <h4>Higher level</h4>
                        <p>{details.higher_level}</p>
                    </div>
                    <div>
                        <h4>Material</h4>
                        <p>{details.material}</p>
                    </div>
                    <Table>
                        <div>
                            <h4>Ritual</h4>
                            {details.ritual === false ? (
                                <p>False</p>
                            ) : (
                                <p>True</p>
                            )}
                        </div>
                        <div>
                            <h4>Duration</h4>
                            <p>{details.duration}</p>
                        </div>
                        <div>
                            <h4>Level</h4>
                            <p>{details.level}</p>
                        </div>
                        <div>
                            <h4>Casting time</h4>
                            <p>{details.casting_time}</p>
                        </div>
                    </Table>
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

const Table = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
        flex-direction: column;
        text-align-last: center;
    }
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

    @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
        margin: 0rem 1rem;
    }
`

export default SpellDetailed
