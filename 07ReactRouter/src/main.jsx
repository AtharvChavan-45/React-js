import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:'about',
        element:<About/>
      },{
        path:'contact',
        element:<Contact/>
      },{
        path:'user',
        element:<User/>
      },{
        
        path:'github',
        element:<Github/>

      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
