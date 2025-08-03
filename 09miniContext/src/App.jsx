import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    // wrapper that makes children aware of the context
    <UserContextProvider>
      <h1>React video for Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
