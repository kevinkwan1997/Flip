import Logo from '../../resources/logo.png'
import { useNavigate  } from 'react-router'
import { useDispatch } from 'react-redux'

const NavPrimary = ({ username, history, setShowModal }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const logout = () => {
    const user = {
      username: 'test',
      token: 'test'
    }
    dispatch({ type: 'logout', payload: user })
    localStorage.removeItem('user')
    console.log()
  }

  
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
