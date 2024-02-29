import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cart: [{
        image: 'https://hips.hearstapps.com/hmg-prod/images/fresh-sliced-mini-kiwis-royalty-free-image-1690215764.jpg',
        id: 1,
        count: 1
    },]
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cart.findIndex(item=>item.id == action.payload.id)
            if(index>=0){
                state.cart[index].count = state.cart[index].count +1
            }else{
                const card = action.payload
                state.cart.push(card)
            }
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter((card, index) => card.id !== action.payload)
        },
        addCount: (state, action) => {
            state.cart.map((card, i) => {
                if (card.id == action.payload) {
                    state.cart[i].count = state.cart[i].count + 1
                }
            })
        },
        decrCount: (state, action) => {
            state.cart.map((card, i) => {
                if (card.id == action.payload) {
                    if (state.cart[i].count > 0) {
                        state.cart[i].count = state.cart[i].count - 1
                    }
                }
            })
        }
    }
})

export default cartSlice.reducer
export const { addToCart, decrCount, addCount, removeToCart } = cartSlice.actions