import React from 'react'
import store from './store'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications';
import Home from './containers/Home'
import Cart from './containers/Cart'
import GlobalCSS from './utils/globalStyles'
import Navbar from './components/Navbar'
import ThemeWrapper from './utils/themeProvider'

function App() {
  return (
    <ThemeWrapper>
      <Provider store={store}>
        <GlobalCSS />
        <ToastProvider>
          <Router>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
          </Router>
        </ToastProvider>
      </Provider>
    </ThemeWrapper>
  )
}

export default App
