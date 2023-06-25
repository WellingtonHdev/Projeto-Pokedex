import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css'
import { Router } from './Routes/Routes'
import { GlobalContextProvider } from './context/globalContext'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});

function App() {


  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>


    </GlobalContextProvider>
  )
}

export default App
