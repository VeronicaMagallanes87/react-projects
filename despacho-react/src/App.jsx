import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './public/vite.svg'
import './App.css'
// import Component from './assets/Component'
import Formulario from './assets/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>        
        <img src="/losgilgares.jpeg" class="photo"></img>
        {/* <Component /> */}
        <Formulario />
      </div>
    </>

  )
}

export default App
