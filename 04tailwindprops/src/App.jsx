import './App.css'
import Card from '../components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-amber-600 p-3 rounded-md'>vite with tailwind</h1>
      <Card username="Aayush Gupta"  role="SDE" location="Hyderabad"/>
      <Card username="John Doe"  role="Staff" location="Hyderabad" myArr = {[1,2,3,4]}/>
    </>
  )
}

export default App
