import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About.jsx'
import MainContent from './components/MainContent.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Services from './pages/Services.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <MainContent/>},
      {path: "about", element: <About/>},
      {path: "services", element: <Services/>},
      {path: "*", element: <PageNotFound/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
