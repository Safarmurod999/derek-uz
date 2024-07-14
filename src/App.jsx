import { BrowserRouter } from 'react-router-dom'
import Router from './router/routes'
import { Toaster, toast} from 'sonner'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right'  richColors toastOptions={{
        style:{
          padding:'10px 20px',
        }
      }}/>
      <Router />
    </BrowserRouter>
  )
}

export default App
