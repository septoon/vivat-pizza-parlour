import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'

import CatalogueContainer from './components/Catalogue/CatalogueContainer';
import Header from './components/Header/Header'
import TeaCardContainer from './components/TeaCard/TeaCardContainer';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Basket from './components/Basket/Basket';

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
          <Route path='/basket' component={ Basket } />
        </div>
      </div>
    )
  }
}

export default App;
