import { CartState } from '../Context/favouriteContext'

const Favourite = () => {
    const { cart, setCart } = CartState()
    console.log(cart)

    const deleteHandler = (index) => {
        const newData = cart.filter((restData) => restData.index !== index)
        setCart(newData)
    }

    return (
        <div>
            {cart && cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item.index}>
                        {item.name}
                        <button onClick={() => deleteHandler(item.index)}>
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No Data</p>
            )}
        </div>
    )
}

export default Favourite
