
import React, { useEffect, useState } from 'react'
import { GetData } from '../config/ApiBase/ApiBase'
import { addCount, addToCart, decrCount } from '../config/redux/reducer/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const [item, setItem] = useState(0)
    const cartItem = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [cardArr, setCardArr] = useState([
        {
            image: 'https://hips.hearstapps.com/hmg-prod/images/fresh-sliced-mini-kiwis-royalty-free-image-1690215764.jpg',
            id: 1,
            count: 1
        },
        {
            image: 'https://media.istockphoto.com/id/1157946861/photo/red-berry-strawberry-isolated.jpg?s=170667a&w=0&k=20&c=KLmzUvMOPglQqhc6COf64_Orp3F5Q4loqJ8JaFJtF9k=',
            id: 2,
            count: 1
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28_ia2Vz8xeOYCMxvDworufco5zZ2gnTffQ&usqp=CAU',
            id: 3,
            count: 1
        },
        {
            image: 'https://images.unsplash.com/photo-1631178306815-7f9a2cb0aafb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 4,
            count: 1
        },
        {
            image: 'https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=RZ78UVLHuKNiNFQPAJZh6tjTqZjrSrzujb864GLcj0A=',
            id: 5,
            count: 1
        },
        {
            image: 'https://media.istockphoto.com/id/1453788164/photo/mango-fruit-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=qk49n3QD4Mr7LP7CYUsHQREnc_y63mKCxqtnbexKkgY=',
            id: 6,
            count: 1
        },
        {
            image: 'https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=2048x2048&w=is&k=20&c=VMun9auGuuInqHMIkyfOLKa0sEeI3Z8F3y6uKbraGBo=',
            id: 7,
            count: 1
        },
        {
            image: 'https://images.unsplash.com/photo-1568387022280-92935eb78c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZSUyMGJlcnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 8,
            count: 1
        },
        {
            image: 'https://media.istockphoto.com/id/1331103847/photo/graps-fruit-hanging-in-plant.jpg?s=2048x2048&w=is&k=20&c=c782fyubSZadomBIBQxdZ3w4Z20D8TZwi6GRxWFuJgE=',
            id: 9,
            count: 1
        }
    ])


    const handleAddToCart = (card) => {
        const cardData = {
            ...card,
            text: "Fruite and Vegitable",
            body: "Lorem the industry's standard dummy text scramb...."
        }
        dispatch(addToCart(cardData))
    }
    const decrItemcount = (cards) => {
        dispatch(decrCount(cards.id))
    }
    const addItemcount = (cards) => {
        dispatch(addCount(cards.id))
    }
    const cartScreen = () => {
        navigate('/cart')
    }
    useEffect(() => {
        setItem(cartItem.cart.length)
    }, [handleAddToCart])

    return (
        <>
            <Navbar />
            <h3 className="text-center">Features</h3>
            <div className='container main mx-auto'>
                <div className="d-flex justify-content-end p-3">
                    <button className='item_count'>{item}</button>
                    <button onClick={cartScreen} className="cart_btn"> Cart
                        <img width="25"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d9yL-eXm9KUXtwmM7oP5HM1girkTpQN7w&usqp=CAU"
                            alt="" /> </button>
                </div>
                <div className='row'>
                    {
                        cardArr.map((card, index) => {
                            return (
                                <div key={index} className=' mx-auto mt-5 mx-2 card col-md-3 col-lg-3 col-sm-12 p-3 mb-5 rounded px-3 py-3'>
                                    <div className="image-container">
                                        <img className='mx-auto rounded' src={card.image} />
                                    </div>
                                    <h4 className='text-center mt-4 py-2'>Fruite and Vegitable</h4>
                                    <p className='mt-2 text-center'>Lorem the industry's standard dummy text scramb....</p>
                                    <button className='butt mx-5' onClick={() => handleAddToCart(card)} ><span className='span'></span> Add to
                                        Cart </button>
                                    {
                                        cartItem.cart.map((x, i) => {
                                            if (card.id == x.id) {
                                                <div className="d-flex justify-content-center my-1 mt-3">
                                                    <button onClick={()=>decrItemcount(card)} className='small_btn'><span className='span'></span> - </button>
                                                    <span className="mx-3">{card.count}</span>
                                                    <button onClick={() => addItemcount(card)} className='small_btn'><span className='span'></span> + </button>
                                                </div>
                                            }
                                        })
                                    }

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
