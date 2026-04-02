import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './componants/Root/Root.jsx'
import Home from './componants/Home/Home.jsx'
import Movielse from './componants/Movielse/Movielse.jsx'
import Laptops from './componants/Laptops/Laptops.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'movielse', Component: Movielse },
      { path: 'laptops', Component: Laptops }
    ]
  },
  {
    path: 'about',
    element: <div>Avout me here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    // element:<App></App>
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
