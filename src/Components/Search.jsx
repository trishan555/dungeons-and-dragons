import styled from 'styled-components'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { CartState } from '../Context/Context'
import SingleSpell from './SingleSpell'

const Search = () => {
    const [searchTerms, setSearchTerms] = useState('')
    const { spellData, setSpelldata } = CartState()

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
        background: linear-gradient(10deg, #615f5f, #342f2f);
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
`
const Wrapper = styled.div`
    margin: 3rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`
export default Search
