import Cart from '../assets/icons/cartIcon.svg'
import { Link } from "react-router-dom"
import '../index.css'
import { shopContext } from '../context/Shop-context'
import { useContext } from 'react'

export default function Nav() {
  const { shop } = useContext(shopContext)
  return (
    <div className='fixed w-full top-0 bg-black py-3'>
      <div className='flex justify-between w-[80%] mx-auto text-white items-center '>
        <Link to="/">
          <button>Home</button>
        </Link>
        <div className='flex gap-52 items-center'>
          <Link to="/shop">
            <button>Shop</button>
          </Link>
          <Link to="/cart">
            <div className='relative'>
              <button><img className='w-7' src={Cart} alt="" /></button>
              <p className='text-[8px]  text-white absolute top-0 -right-5' >{shop.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
