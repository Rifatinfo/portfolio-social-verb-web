import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routers.jsx'
import { StrictMode } from 'react'
import { ScrollProvider } from '../ScrollProvider.jsx'



createRoot(document.getElementById('root')).render(

  <ScrollProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </ScrollProvider>

)
