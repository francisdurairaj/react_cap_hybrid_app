import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState({});
  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const resp = await fetch("https://httpbin.org/get", {
            "headers": {
              "accept": "application/json",
              "accept-language": "en-US,en;q=0.9",
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
          }); 
    setResponse(await resp.json());
  }

  return (
    <>      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleClick}>
          call api
       </button>
       {JSON.stringify(response)}
    </>
  )
}

export default App
