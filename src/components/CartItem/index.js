import './index.css'

const CartItem = props => {
    const {cartData, onClickRemoveCartItem} = props
    const {id, title, price, category, image, rating} = cartData
    const onClickRemove = () => {
        onClickRemoveCartItem(id)
    }
    return(
        <li className='cart-item'>
            <div className='cart-img-cont'>
                <img src={image} className='cart-img' alt={title} />
                <div className='product-increment'>
                    <h2 className='incre'>-</h2>
                    <h2 className='incre'>1</h2>
                    <h2 className='incre'>+</h2>
                </div>
            </div>
            <div className='cart-column'>
                <div>
                    <p className='product-category'>{category}</p>
                    <p className='product-title'>{title}</p>
                    <h2 className='product-price'>${price}</h2>
                </div>
                <button className='cart-remove-btn' onClick={onClickRemove}>Remove</button>
            </div>
        </li>
    )
}

export default CartItem