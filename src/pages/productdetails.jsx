import React, { useContext } from 'react'
import Product from './shop/Product'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ShopProvider, { shopContext } from '../context/Shop-context'
import Rating from '../components/Rating'

export default function Productdetails() {
    const location = useLocation()
    const {shop, setShop, addTocart} = useContext(shopContext)
    const { fooditems } = location.state;
    return (
        <div className='mt-16 mx-auto w-[80%]'>
            <Link to='/shop'>
                <p>{'<-'}back</p>
            </Link>
            {fooditems && <div className='flex mt-10 gap-16 border-2 p-10 items-center'>
                <img className='w-[40vw]' src={fooditems.image} alt="" />
                <div>
                    <h1 className='text-[30px] font-bold'>{fooditems.title}</h1>
                    <p>{fooditems.description}</p>
                    <h1 className='text-[20px] font-bold text-red-600'>${fooditems.price}</h1>
                    <Rating value={fooditems.rating} />
                    <button onClick={() => addTocart(fooditems)} className='text-white text-sm bg-slate-600 p-3 m-2 rounded-md' >Add To Cart</button>
                </div>
            </div>}

        </div>
    )
}
