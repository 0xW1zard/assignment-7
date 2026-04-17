import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Router'
import FriendProvider from './components/context/FriendProvider'
import { Flip, ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router} />
    </FriendProvider>
    <ToastContainer
    position="bottom-right"
    autoClose={800}
    theme="light"
    transition={Flip}
    ></ToastContainer>
  </StrictMode>,
)
