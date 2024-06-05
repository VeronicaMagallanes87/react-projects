import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './assets/Component'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <img src="/losgilgares.jpeg"class="photo"></img>
        <Component />
      </div>
    </>

  )
}

export default App
