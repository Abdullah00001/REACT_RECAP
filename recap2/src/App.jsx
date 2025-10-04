import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {

  return (
    <>
    <HelmetProvider>
      <RouterProvider router={Routes} />
    </HelmetProvider>
    </>
  )
}

export default App
