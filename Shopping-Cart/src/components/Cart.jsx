import React from "react"
import { useContext } from "react"
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai"
import { ShopContext } from "../App"

const Cart = () => {
  const { setIsShowCart, cart, handleAddToCart, removeFromCart } =
    useContext(ShopContext)
  const dollarUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  const total = arr => {
    return arr.reduce((acc, curr) => {
      return acc + curr.price * curr.amount
    }, 0)
  }
  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      onClick={() => setIsShowCart(false)}>
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white w-[250px] h-full absolute right-0 overflow-scroll animate-fade-in">
        <h1 className="bg-red-400 py-2 text-center">Cart</h1>
        <div className="flex flex-col items-center px-2  py-4  ">
          {cart.map(item => (
            <div
              key={item.id}
              className="text-center border-b-[3px] w-full flex flex-col items-center mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="h-[120px] w-[120px] mb-2"
              />
              <p className="text-white w-6 h-6 rounded-full bg-blue-700">
                {item.amount}
              </p>
              <h3 className="text-[10px]">{item.title}</h3>
              <div className="flex items-center gap-2 my-2">
                <button onClick={() => removeFromCart(item.id)}>
                  <AiOutlineMinusSquare className="text-[30px] text-gray-500" />
                </button>
                <p className="text-red-600">{dollarUSD.format(item.price)}</p>
                <button onClick={() => handleAddToCart(item)}>
                  <AiOutlinePlusSquare className="text-[30px] text-gray-500" />
                </button>
              </div>
            </div>
          ))}
          <p>Total: {dollarUSD.format(total(cart))}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
