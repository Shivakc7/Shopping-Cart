import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Header from "./components/Header"
import { useEffect } from "react"
import Product from "./components/Product"
import Cart from "./components/Cart"
import Filters from "./components/Filters"
import Loader from "./components/Loader"
import { createContext } from "react"

export const ShopContext = createContext(null)

function App() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [cart, setCart] = useState([])

  const [isShowCart, setIsShowCart] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const data = await fetch("https://fakestoreapi.com/products")
        const products = await data.json()
        setProducts(products)
        setFilters(products)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleAddToCart = product => {
    setCart(prev => {
      const findProductInCart = prev.find(item => item.id === product.id)

      if (findProductInCart) {
        return prev.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      }
      return [...prev, { ...product, amount: 1 }]
    })
  }

  const removeFromCart = id => {
    setCart(prev => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal
          return [...cal, { ...item, amount: item.amount - 1 }]
        }
        return [...cal, { ...item }]
      }, [])
    })
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        filters,
        setFilters,
        cart,
        setCart,
        isShowCart,
        setIsShowCart,
        activeCategory,
        setActiveCategory,
        isLoading,
        setIsLoading,
      }}>
      <div className="App">
        <div className="bg-red-700">
          <Header />
        </div>
        <div className="container mx-auto my-2 px-4">
          <Filters
            
          />
        </div>
        <div className="flex flex-wrap py-2 px-4 container mx-auto">
          {filters.map(product => (
            <Product
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        {isShowCart && (
          <Cart
            
          />
        )}
        {isLoading && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
    </ShopContext.Provider>
  )
}

export default App
