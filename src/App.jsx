import * as React from "react"

const App = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>ADD</button>
    </div>
  )
}

export default App
