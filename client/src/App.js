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
  const currentUser = {
    username: '',
    password: '',
    token: ''
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');
  

  const Login = (loginDetails) => {
    console.log(loginDetails);

    axios.post('http://localhost:8080/login', JSON.stringify(loginDetails))
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(e => {
        console.log(e);
      })
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
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heritage, but need gambling money',
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
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heritage, but need gambling money',
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
      itemDesc: 'Stored in a cool, dry environment. Rarely played. Family heritage, but need gambling money',
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
      brandDesc: 'Rare copies of books',
      itemTypeId: 1,
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
      <Nav />
      {(currentUser.username != '') ? (
        <div className="app-wrapper">
        <Inventory inventory={ inventory }/>
        <Brands />
        <History />
        <Metrics />
      </div>
      ) : (
        <LoginForm Login={ Login } error={ error } />
      )}

      </div>
    </div>
  );
}

export default App;
