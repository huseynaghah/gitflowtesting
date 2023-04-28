import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ContactComponent } from './pages/contact/contact.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContactComponent/>
  )
}

export default App
