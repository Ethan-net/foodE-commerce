import React, { useContext } from 'react'
import Rating from '../../components/Rating'
import { shopContext } from '../../context/Shop-context'
import { Link } from 'react-router-dom'

export default function Product({ fooditems  }) {

    const { addTocart} = useContext(shopContext)
    
    return (
        <div className='mt-20'>
            
            

            <li className='m-5 w-80   shadow-lg rounded-md'>
                <Link to="/productdetails"
                    state={{ fooditems }}
                    key={fooditems.id}>
                <div>
                    <img className='w-full' src={fooditems.image} alt="" />
                    <div className='px-3 py-5'>
                        <h1 className='font-bold'>{fooditems.title}</h1>
                        <p>{fooditems.description}</p>
                        <h1 className='font-bold text-green-700'>${fooditems.price}</h1>
                    </div>
                </div>
            </Link>
                <div className='flex item-center justify-between mx-3'>
                    <Rating value={fooditems.rating} />
                    
                    <button onClick={() => addTocart(fooditems)} className='text-white text-sm bg-slate-600 p-3 m-2 rounded-md' >Add To Cart</button>
                </div>

            </li>
            
        </div>
    )
}
