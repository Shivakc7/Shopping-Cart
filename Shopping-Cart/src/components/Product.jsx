import React from "react"

const Product = ({ product, handleAddToCart }) => {
  const dollarUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border border-['lightgray'] px-2 mx-2 mb-2 rounded-lg">
      <div className="w-[100px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full pt-2 "
        />
      </div>
      <h3 className="mt-auto font-medium">{product.title}</h3>
      <p className="text-red-700 font-bold mt-auto">
        {dollarUSD.format(product.price)}
      </p>
      <button onClick={() => handleAddToCart(product)} className="bg-gray-300 w-full mt-auto rounded-lg py-1 mb-2 hover:bg-gray-500 hover:text-white">
        Buy Now
      </button>
    </div>
  )
}

export default Product
