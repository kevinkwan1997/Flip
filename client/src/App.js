import Nav from './components/application/Nav'
import LoginForm from './components/application/LoginForm'

import { useState, useEffect } from 'react'
import '../src/style/custom.scss'
import '../src/style/App.css'
import '../src/style/Inventory.css'
import '../src/style/Brand.css'
import '../src/style/History.css'
import '../src/style/Modal.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import FullItemView from './views/FullItemView'
import BrandView from './views/BrandView'
import HistoryView from './views/HistoryView'
import AddItemModal from './components/application/AddItemModal'
import AddBrandModal from './components/application/AddNewBrandModal'

import { Provider } from 'react';

function App() {

  /* Authentication */


  // Will allow you to refrsh the page while keeping user logged in
  // Once current user is set, retrieves inventory, brand and history
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if(loggedInUser) {
      const currUser = loggedInUser
      console.log(JSON.parse(currUser).token)
      setCurrentUser(currUser);
      fetchInventory(JSON.parse(currUser).token);
      fetchBrands(JSON.parse(currUser).token);
      fetchHistory(JSON.parse(currUser).token);
    }
  }, [])

  const [currentUser, setCurrentUser] = useState(
    {
      username: '',
      token: ''
    }
  )
  
  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  

  const Login = async (loginDetails) => {
    try {
      const resp = await axios.post("http://localhost:8080/login", JSON.stringify(loginDetails), {
        headers: { 
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
         },
      }).then (resp => {
        const currUser = {
          username: loginDetails.username,
          token: resp.data.token
        }
        setCurrentUser( currUser )
        localStorage.setItem('user', JSON.stringify(currUser))
        setLoading({loading: true})
      })
    }catch(e) {
      console.error(e.message);
    }
  }

  const Logout = () => {
    const user = {
      username: '',
      token: ''
    }
    localStorage.removeItem('user')
    setCurrentUser(user);
  }

  const fetchInventory = (token) => {
    try {
      const resp = axios.get("http://localhost:8080/items/all", {
        headers: {
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      }).then((resp) => {
        console.log(resp);
        setInventory(resp.data);
      })
    }catch(e) {
      console.error(e);
    }
  }

  const fetchBrands = (token) => {
    try {
      const resp = axios.get("http://localhost:8080/brands/all", {
        headers: {
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      }).then((resp) => {
        console.log(resp);
        setBrands(resp.data);
      })
    }catch(e) {
      console.error(e);
    }
  }

  const fetchHistory = (token) => {
    try {
      const resp = axios.get("http://localhost:8080/history", {
        headers: {
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      }).then((resp) => {
        console.log(resp);
        setHistory(resp.data);
      })
    }catch(e) {
      console.error(e);
    }
  }

  const addItem = async (e, item) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'))
    try{
      await axios.post('http://localhost:8080/items/add', JSON.stringify(item.item), {
        headers: { 
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${user.token}`
         },
      }).then((resp) => {
        console.log('Success!');
        console.log(resp.data.itemId);
        setInventory([...inventory], resp.data)
      })
    }catch(e){
      console.error(e);
    }
    
  }


  /* temporary data for layout */
  const [inventory, setInventory] = useState([])

  const [brands, setBrands] = useState ([])

  const [history, setHistory] = useState ([

  ])

  const [metrics, setMetrics] = useState ([
    {
      totalItemsSold: 0,
      totalSales: 0,
    }
  ])

  // Loading screen 

  const [loading, setLoading] = useState({
    loading: false
  })

  const [showModal, setShowModal] = useState(false)
  
  const showLoadingScreen = () => {
    this.useEffect(() => {
      const timer = setTimeout(() => {
        setLoading({loading: false})
      }, 1500)
    })

  }

  return (
    <BrowserRouter >
      <div className="wrapper">
      {(currentUser.username !== '') ? (
        <div className="app-wrapper">
        <Nav username={ currentUser.username } logout={ Logout } setShowModal={ setShowModal } /> 
        {(showModal) ? (
          <AddItemModal addItem={ addItem } setShowModal={ setShowModal } />
        ) : (
          null
        )}
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                inventory={ inventory } 
                brands={ brands } 
                history={ history } 
                metrics={ metrics } 
                setInventory={ setInventory }
                setHistory={ setHistory } />} />
          <Route path="/inventory" element={<FullItemView inventory={ inventory } />} />
          <Route path="/brands" element={<BrandView brands={ brands } />} /> 
          <Route path="/history" element={<HistoryView history={ history } />} /> 
        </Routes>

         </div>
           ) : (
        
            <LoginForm Login={ Login } error={ error } />
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

export default App;
