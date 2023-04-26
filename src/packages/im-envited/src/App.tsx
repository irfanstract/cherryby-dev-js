import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoListComponent from 'src/projects/ToDoListComponent';
import IDBF from 'src/projects/idbf';
import './App.css'
1 && import("cbtt") ;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div
      style={{
        display: "none" ,
      }}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test the live-reloading
        </p>
      </div>
      <p>
        <a href="about:blank">
          clear this page and go to <code>about:blank</code>
        </a>
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <ToDoListComponent value={3} onItemReorder={Object} />
      </div>
      <div>
        <IDBF />
      </div>
    </div>
  )
}

export default App
