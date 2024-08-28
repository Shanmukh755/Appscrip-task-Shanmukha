import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'
import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartDataList}) => {
    const [cartList, setCartList] = useState(cartDataList)
    const navigate = useNavigate()
    const onClickRemoveCartItem = id => {
        const updatedCart = cartList.filter(each => each.id !== id)
        setCartList(updatedCart)
    }

    const onClickBackToShop = () => {
        navigate('/')
    }

    const renderSuccess = () => {
        return(
            <div className='cart-card-container'>
                <ul className='cart-list-container'>
                    {cartList.map(each => (
                        <CartItem cartData={each} key={each.id} onClickRemoveCartItem={onClickRemoveCartItem} />
                    ))}
                </ul>
            </div>
        )
    }

    const renderFailure = () => {
        return(
            <div className='cart-failure'>
                <img src='https://webstockreview.net/images/shop-clipart-retail-industry-5.png' className='cart-empty-img' alt='cart' />
                <h1 className='cart-empty-text'>Your cart is empty</h1>
                <button onClick={onClickBackToShop} className='cart-empty-btn'>Back to shopping</button>
            </div>
        )
    }
    return (
        <div className='cart-container'>
            <Header />
            {cartList.length>0 ? renderSuccess() : renderFailure()}
            <Footer />
        </div>
    )
}

export default Cart