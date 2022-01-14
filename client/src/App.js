import Nav from './components/application/Nav'
import LoginForm from './components/application/LoginForm'

import { useState, useEffect, Component } from 'react'
import '../src/style/custom.scss'
import '../src/style/App.css'
import '../src/style/Inventory.css'
import '../src/style/Brand.css'
import '../src/style/History.css'
import '../src/style/Modal.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'

import Home from './components/home/Home'
import FullItemView from './views/FullItemView'
import BrandView from './views/BrandView'
import HistoryView from './views/HistoryView'
import AddItemModal from './components/application/AddItemModal'
import AddBrandModal from './components/application/AddNewBrandModal'

const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn
    }
}

const temp = false;
const showModal= false;

class App extends Component {


  render() {
    return (
      <BrowserRouter >

        <div className="wrapper">
        {(true) ? (
          <div className="app-wrapper">
          <Nav/> 
          {(showModal) ? (
            <AddItemModal />
          ) : (
            null
          )}
          <Routes>
            <Route 
              path="/" 
              element={
                <Home />} />
            <Route path="/inventory" element={<FullItemView/>} />
            <Route path="/brands" element={<BrandView/>} /> 
            <Route path="/history" element={<HistoryView />} /> 
          </Routes>
  
           </div>
             ) : (
              <div className="ha">
                              <LoginForm/>

              </div>


            )}
        </div>
      </BrowserRouter>
  
  
      /*{/* <div className="App">
        <div className="wrapper">
        {(currentUser.username !== '') ? (
          <div className="app-wrapper">
            <Nav username={ currentUser.username } logout={ Logout }/> 
          <div className="app-container">
            <Inventory inventory={ inventory } deleteItem={ deleteItem } markSold={ markSold }/>
            <Brands brands={ brands } />
            <History history={ history }/>
            <Metrics getTotal={ getTotal } getOtherMetrics={ getOtherMetrics } />
          </div>
  
        </div>
        ) : (
          
          <LoginForm Login={ Login } error={ error } />
        )}
  
        </div>
      // </div> *//*} */
  
    );
  }
  }


export default connect(mapStateToProps)(App);
