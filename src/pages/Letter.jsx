import { useState } from "react"

const Letter = () => {
  const [letterState, setLetterState] = useState("")
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    if (count >= 5) setLetterState("open")
  }

  return (
    <>
      <div
        className="letter"
        data-state={letterState}
        onClick={handleClick}
      ></div>
    </>
  )
}

export default Letter
