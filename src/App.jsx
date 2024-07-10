import { BrowserRouter } from 'react-router-dom'
import Router from './router/routes'
import { Toaster, toast} from 'sonner'

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Router />
    </BrowserRouter>
  )
}

export default App
