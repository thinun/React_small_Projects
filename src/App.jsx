import { useState } from 'react'
import Accordion from "./Accordion_multiple/Accordion.jsx";
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion></Accordion>

    </>
  )
}

export default App
