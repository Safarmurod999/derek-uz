import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Router from './router/routes'
import { Toaster, toast } from 'sonner'
import { useState } from 'react';
import { DEFAULT_LANG } from './data/const';

function App() {
  const [locale, setLocale] = useState(DEFAULT_LANG);
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Router />
    </BrowserRouter>
  )
}

export default App
