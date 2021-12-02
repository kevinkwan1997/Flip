import Nav from './components/Nav'
import { useState } from 'react'
import '../src/custom.scss'
import '../src/App.css'
import Inventory from './components/Inventory'
import Brands from './components/Brands'
import Metrics from './components/Metrics'
import History from './components/History'
import LoginForm from './components/LoginForm'
import axios from 'axios'

function App() {
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
      })
    }catch(e) {
      console.error(e.message);
    }
  }

  const Logout = () => {
    console.log("Log out");
  }

  /* temporary data for layout */
  const [inventory, setInventory] = useState([
    {
      id: 1,
      brand: 'Prada',
      gender: 'Female',
      itemName: 'purse',
      itemTypeId: 3,
      price: 599.99,
      priceListed: 650.99,
      itemDesc: 'Used once!',
      itemStatusId: 1,
      accountId: 2001,
      listDate: '09/20/2020'
    },
    {
      id: 2,
      brand: 'Sony',
      gender: 'N/A',
      itemName: 'PlayStation 3',
      itemTypeId: 2,
      price: 150.99,
      priceListed: 170.99,
      itemDesc: 'Very good condition.',
      itemStatusId: 1,
      accountId: 2001,
      listDate: '10/20/2020'
    },
    {
      id: 3,
      brand: 'Nike',
      gender: 'Unisex',
      itemName: 'Socks',
      itemTypeId: 3,
      price: 8.99,
      priceListed: 8.99,
      itemDesc: 'Worn cleanly',
      itemStatusId: 3,
      accountId: 2001,
      listDate: '01/20/2021'
    },
    {
      id: 4,
      brand: 'Stradavarius',
      gender: 'N/A',
      itemName: 'Violin',
      itemTypeId: 7,
      price: 560000.99,
      priceListed: 600000.00,
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heirloom, but need gambling money',
      itemStatusId: 7,
      accountId: 2001,
      listDate: '07/22/2021'
    },
    {
      id: 5,
      brand: 'Stradavarius',
      gender: 'N/A',
      itemName: 'Violin',
      itemTypeId: 7,
      price: 560000.99,
      priceListed: 600000.00,
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heirloom, but need gambling money',
      itemStatusId: 7,
      accountId: 2001,
      listDate: '07/22/2021'
    },
    {
      id: 6,
      brand: 'Stradavarius',
      gender: 'N/A',
      itemName: 'Violin',
      itemTypeId: 7,
      price: 560000.99,
      priceListed: 600000.00,
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heirloom, but need gambling money',
      itemStatusId: 7,
      accountId: 2001,
      listDate: '07/22/2021'
    },
  ])

  const [brands, setBrands] = useState ([ 
    {
      id: 1,
      brandDesc: 'J.Crew',
      itemTypeId: 3,
      accountId: 2001
    },
    {
      id: 2,
      brandDesc: 'Woolrich',
      itemTypeId: 3,
      accountId: 2001
    },
    {
      id: 3,
      brandDesc: 'Fender',
      itemTypeId: 7,
      accountId: 2001
    },
    {
      id: 4,
      brandDesc: 'Gucci',
      itemTypeId: 3,
      accountId: 2001
    },
  ])
  

  return (
    <div className="App">
      <div className="wrapper">
      {(currentUser.username !== '') ? (
        <div className="app-wrapper">
        <Nav username={ currentUser.username } /> 
        <div className="app-container">
        <Inventory inventory={ inventory }/>
        <Brands brands={ brands } />
        <History />
        <Metrics />
        </div>

      </div>
      ) : (
        <LoginForm Login={ Login } error={ error } />
      )}

      </div>
    </div>
  );
}

export default App;
