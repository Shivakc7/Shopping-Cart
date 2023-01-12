import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { ShopContext } from "../App"

const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "men's clothing",
  },
  {
    id: 3,
    name: "women's clothing",
  },
  {
    id: 4,
    name: "jewelery",
  },
  {
    id: 5,
    name: "electronics",
  },
]

const Filters = () => {
  const { activeCategory, setActiveCategory, products, setFilters } =
    useContext(ShopContext)

  useEffect(() => {
    if (activeCategory === "All") {
      setFilters(products)
      return
    }
    const filterCategory = products.filter(item =>
      activeCategory === "All" ? item : item.category === activeCategory
    )
    setFilters(filterCategory)
    return
  }, [activeCategory, products, setFilters])
  return (
    <div>
      <div>
        {categories.map(category => (
          <button
            onClick={() => setActiveCategory(category.name)}
            key={category.id}
            className={`bg-white border-2 border-gray-500 rounded-lg mr-2 mb-2 px-2 py-2 ${
              activeCategory === category.name &&
              "bg-blue-500 text-white font-bold"
            }`}>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters
