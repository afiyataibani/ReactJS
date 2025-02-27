import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PreserveValue from './components/PreserveValue'
import PreviousState from './components/PreviousState'
import BasicDomMani from './components/BasicDomMani'
import AnimateBox from './components/AnimateBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreserveValue/>
      <PreviousState/>
      <BasicDomMani/>
      <AnimateBox/>
    </>
  )
}

export default App
