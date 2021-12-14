import Logo from '../../resources/logo.png'
import { useNavigate  } from 'react-router'

const NavPrimary = ({ username, logout, history, setShowModal }) => {

  const navigate = useNavigate();
  
    return (
      <div className="navbar">

        <ul id="menu">
          <img id="logo" src={ Logo } alt="" />
          <li className="menu-item"><span className="menu-btn" onClick={() => {navigate('/')}} >Home</span></li>
          <li className="menu-item"><span className="menu-btn" onClick={() => {navigate('/inventory')}} >Inventory</span></li>
          <li className="menu-item"><span className="menu-btn" onClick={() => {navigate('/brands')}} >Brands</span></li>
          <li className="menu-item"><span className="menu-btn" onClick={() => {navigate('/history')}}>History</span></li>
          <li className="menu-item"><span className="menu-btn" onClick={() => logout()}>Log out</span></li>
          <h3 id="intro" >Welcome, { username }</h3>
          <li className="menu-item"><span className="menu-btn" onClick={() => setShowModal(true)} >Add new item +</span></li>
          <li className="menu-item"><span className="menu-btn" href="about">Add new brand +</span></li>
        </ul>
      </div>

    )
}

export default NavPrimary
