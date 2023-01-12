import React from "react"
import logo from "../assets/react.svg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useContext } from "react"
import { ShopContext } from "../App"



const Header = () => {
  const {setIsShowCart, cart} = useContext(ShopContext)
  return (
    <div className="container mx-auto flex items-center justify-between  py-1 px-2 text-white">
      <img src={logo} alt="logo" className="w-12 h-12" />

      <div>
        <h1 className="uppercase font-bold text-xl">Shiva's Clothing Store</h1>
      </div>
      <div className="flex items-center">
        
        <div className="relative" onClick={() => setIsShowCart(true)}>
          <AiOutlineShoppingCart className="text-[24px]" />
          {cart.length > 0 && 
          <span className=" absolute bg-blue-700 text-white w-5 h-5 rounded-full -top-4 left-2 text-center leading-5">
            {cart.length}
          </span>}
        </div>
      </div>
    </div>
  )
}

export default Header
