import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // this is called sandwiching base route and then has more routes inside
    // it changes the outlet all the time and everything in the base remains same
    <Route path='/' element={<Layout/>}>  {/* element: which component to use*/}
     
      <Route path='' element={<Home/>}/> {/* adds Home element to outlet at base route "https://localhost.../"*/}

      <Route path='about' element={<About/>}/>  {/* here path appends after the parent path i.e "https://localhost.../<appends here>"*/}
      
      {/*sandwitching again  */}
      <Route path='user/' element={<User/>}>
      {/* dynnamic routing i.r giving input field*/}
        <Route path=':userid' />
      </Route>

      <Route path='github' element={<Github/>}/>
      
      {/* Error handeling */}
      <Route path="*" element={<div>Not found</div>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
