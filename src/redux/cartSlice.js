import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    initialState: {
        products: []
    },
    name: "cart",
    reducers: {
        addProductsToCart : (state, action) => {
            const product = action.payload
            if(!state.products) state.products = []
            state.products.push(product)
        },

        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(each => each.id !== action.payload.id)

        }
    }
})

export default cartSlice.reducer
export const {addProductsToCart, removeProductFromCart} = cartSlice.actions