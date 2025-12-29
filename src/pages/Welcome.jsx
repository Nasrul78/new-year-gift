const Welcome = () => {
  const handleClick = () => {
    fetch("api/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "welcome button",
      }),
    })
  }

  return (
    <>
      <h1>Hi, My Dearest Jenii..</h1>
      <p>There's something I've been wanting to tell you recently..</p>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Welcome
