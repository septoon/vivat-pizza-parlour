import React from 'react'
import './App.css';
import CatalogueContainer from './components/Catalogue/CatalogueContainer';
import Header from './components/Header/Header'
import { store } from './redux/redux-store'

import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import TeaCardContainer from './components/TeaCard/TeaCardContainer';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';

class App extends React.Component {

  render() {
    return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <CatalogueContainer /> */}
        <div className='app-wrapper-content'>
          <Route path='/catalog' component={ CatalogueContainer } />
          <Route path='/teaCard' component={ TeaCardContainer } />
          <Route path='/aboutUs' component={ AboutUs } />
        </div>
      </div>
    )
  }
}

const VivatApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider> 
    </BrowserRouter>
  )
}

export default VivatApp;
