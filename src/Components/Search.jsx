import styled from 'styled-components'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { CartState } from '../Context/Context'
import SingleSpell from './SingleSpell'

const Search = () => {
    const [searchTerms, setSearchTerms] = useState('')
    const { spellData } = CartState()

    return (
        <>
            <StyledForm>
                <FaSearch />
                <input
                    type='text'
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value)}
                />
            </StyledForm>
            <Wrapper>
                {spellData
                    .filter((item) => {
                        if (searchTerms === '') return item
                        else if (
                            item.name
                                .toLowerCase()
                                .includes(searchTerms.toLowerCase())
                        )
                            return item
                    })
                    .map((spell) => (
                        <SingleSpell spell={spell} key={spell.index} />
                    ))}
            </Wrapper>
        </>
    )
}

const StyledForm = styled.form`
    position: relative;
    margin: 0rem 10rem;

    input {
        border: none;
        border-radius: 1rem;
        background: linear-gradient(10deg, #403d3d, #615f5f);
        width: 100%;
        outline: none;
        color: white;
        font-size: 1rem;
        padding: 1rem 3rem;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }

    @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
        margin: 0rem 1rem;
        input {
            padding: 0.8rem 3rem;
        }
    }

    @media only screen and (min-device-width: 426px) and (max-device-width: 768px) {
        margin: 0rem 10%;
        input {
            padding: 0.8rem 3rem;
        }
    }
`
const Wrapper = styled.div`
    margin: 3rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`
export default Search
