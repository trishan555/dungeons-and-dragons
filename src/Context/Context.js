import { createContext, useContext, useState, useEffect } from 'react'

const Cart = createContext()

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    const [spellData, setSpelldata] = useState([])

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
        <Cart.Provider value={{ cart, setCart, spellData, setSpelldata }}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart)
}

export default Context
