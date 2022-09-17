import styled from 'styled-components'
import { CartState } from '../Context/Context'
import SingleSpell from '../Components/SingleSpell'

const Favourite = () => {
    const { cart } = CartState()
    //console.log(cart)

    return (
        <div>
            <h3>My Favourites</h3>
            <Wrapper>
                {cart && cart.length > 0 ? (
                    cart.map((item) => (
                        <SingleSpell spell={item} key={item.index} />
                    ))
                ) : (
                    <Ptag>No Data</Ptag>
                )}
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

const Ptag = styled.p`
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1rem;
`

export default Favourite
