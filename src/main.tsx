import '@/styles/globals.scss'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import { resolver, theme } from './configs/themes'

const root = document.getElementById('root')
root &&
  ReactDOM.createRoot(root).render(
    <React.Suspense>
      <BrowserRouter>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Home />
        </MantineProvider>
      </BrowserRouter>
    </React.Suspense>,
  )
