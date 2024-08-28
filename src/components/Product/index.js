import { IoHeartOutline } from "react-icons/io5";
import './index.css'
import { useState } from "react";

const Product = props => {
    const {productDetails, addToCartList} = props
    const {id, title, price, category, image, rating} = productDetails
    const updatedTitle = title.length>15 ? title.slice(0, 16)+"..." : title
    const [isClickCart, setIsClickcart] = useState(false)

    const onClickCart = () => {
        setIsClickcart(true)
        addToCartList(id)
    }

    return(
        <li className='product-container'>
            <img src={image} className='product-img' alt={title} />
            <div className='product-data-container'>
                <p className='product-category'>{category}</p>
                <p className='product-title'>{updatedTitle}</p>
                <h2 className='product-price'>${price}</h2>
                <div className='product-rating'>
                    <p className='product-quantity'>Only {rating.count} left</p>
                    <p className='rating'>{rating.rate}</p>
                </div>
                <div className='row-cont'>
                    {isClickCart ? <button className="add-cart">Added</button> : <button className='add-btn' onClick={onClickCart}>Add to cart</button>}
                    <IoHeartOutline className="wish-icon" />
                </div>
            </div>
        </li>
    )
}

export default Product
