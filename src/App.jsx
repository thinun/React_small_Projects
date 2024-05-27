import { useState } from 'react'
import './App.css'
import StarRating from "./Star_rating/StarRating.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StarRating></StarRating>


    </>
  )
}

export default App
