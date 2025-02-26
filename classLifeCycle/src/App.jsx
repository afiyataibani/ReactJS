import { useState } from 'react'
import LifecycleDemo from './components/LifecycleDemo'
import './App.css'

function App() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <div className="app-container">
      <h1>React Lifecycle Methods Demo</h1>
      <button onClick={() => setShowDemo(!showDemo)}>
        {showDemo ? 'Unmount Component' : 'Mount Component'}
      </button>
      {showDemo && <LifecycleDemo />}
    </div>
  )
}

export default App