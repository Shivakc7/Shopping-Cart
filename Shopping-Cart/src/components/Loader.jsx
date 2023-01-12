import React from "react"

const Loader = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-red-500 animate-bounce"></div>
      <div className="w-10 h-10 rounded-full bg-blue-500 mx-4 animate-ping"></div>
      <div className="w-10 h-10 rounded-full bg-green-500 animate-bounce"></div>
    </div>
  )
}

export default Loader
