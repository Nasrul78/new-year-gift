const Welcome = () => {
  const handleClick = () => {
    fetch("api/twilio", {
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
      <h1>Welcome, My Dearest Jenii..</h1>
      <p></p>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Welcome
