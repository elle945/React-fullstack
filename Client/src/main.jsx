import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ThemeProvider, colors, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    bgcolor: {
     bg: "#F0EFAB"
    },
    cards: {
      bg: '#FFFFFF',
      content: '#ECEBEB'
    }

  },
  typography: {
    h1: {
      fontSize: '64pt',
      fontFamily: "Bodoni",
      color: '#000000'
    },
    h2: {
      fontSize: '20pt',
      fontFamily: "Bodoni",
      color: '#000000'
    },
    h3: {
      fontSize: '14pt',
      fontFamily: 'OpenSans',
      color: '#000000'
    },
    p: {
        fontSize: '12pt',
        fontFamily: 'OpenSans',
        color: '#000000'

    }

  },



  overrides: {
    '@font-face': [{

      fontFamily: 'Bodoni',
      src: `url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500&display=swap');`

    },
    {
      fontFamily: 'OpenSans',
      src: `url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');`

  }],
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
