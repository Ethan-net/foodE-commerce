import React, { useContext } from 'react'
import { results } from './Products.js'
import Product from './Product.jsx'
import { shopContext } from '../../context/Shop-context.jsx'

export default function Shop() {

  const { shop, setShop } = useContext(shopContext)


  return (
    <div className='mt-16 z-10'>
      <h1 className='text-center font-bold text-3xl'>Food Products</h1>
      <ul className='flex flex-wrap my- mx-auto w-[80%]'>
        {results.map((fooditems) => (
          <Product key={fooditems.id} fooditems={fooditems} />
        ))}
      </ul>

    </div>
  )
}
