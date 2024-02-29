import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import { addCount, decrCount, removeToCart } from '../config/redux/reducer/cartSlice'

const Cart = () => {

    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const removeCard = (id) => {
        dispatch(removeToCart(id))
    }
    const addItemcount = (cards) => {
        dispatch(addCount(cards.id))
    }
    const decrItemcount = (cards) => {
        dispatch(decrCount(cards.id))
    }
    return (
        <>
            <Navbar />
            <h3 className="text-center">Features</h3>
            <div className='container main mx-auto'>
                <div className='row'>
                    {
                        cartItem.cart.map((card, index) => {
                            return (
                                <div key={index} className=' mx-auto mt-5 mx-2 card col-md-3 col-lg-3 col-sm-12 p-3 mb-5 rounded px-3 py-3'>
                                    <button onClick={() => removeCard(card.id)} className="cancel">x</button>
                                    <div className="image-container">
                                        <img className='mx-auto rounded' src={card.image} />
                                    </div>
                                    <h4 className='text-center mt-4 py-2'>Fruite and Vegitable</h4>
                                    <p className='mt-2 text-center'>Lorem the industry's standard dummy text scramb....</p>
                                    {/* <button className='butt mx-5' onClick={() => handleAddToCart(card)} ><span className='span'></span> Add to
                                        Cart </button> */}
                                    <div className="d-flex justify-content-center my-1 mt-3">
                                        <button onClick={()=>decrItemcount(card)} className='small_btn'><span className='span'></span> - </button>
                                        <span className="mx-3">{card.count}</span>
                                        <button onClick={()=>addItemcount(card)} className='small_btn'><span className='span'></span> + </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart
