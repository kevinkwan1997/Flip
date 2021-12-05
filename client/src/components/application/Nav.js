import Logo from '../../resources/logo.png'
import { useNavigate  } from 'react-router'

const NavPrimary = ({ username, logout, history }) => {

  const navigate = useNavigate();
  
    return (
      <div className="navbar">

        <ul id="menu">
          <img id="logo" src={ Logo } alt="" />
          <li className="menu-item"><span className="menu-btn" onClick={() => {navigate('/inventory')}} >Home</span></li>
          <li className="menu-item"><span className="menu-btn" >Brand</span></li>
          <li className="menu-item"><span className="menu-btn" >History</span></li>
          <li className="menu-item"><span className="menu-btn" >About</span></li>
          <li className="menu-item"><span className="menu-btn" onClick={() => logout}>Log out</span></li>
          <h3 id="intro" >Welcome, { username }</h3>
          <li className="menu-item"><a className="menu-btn" href="about">Add new item +</a></li>
          <li className="menu-item"><a className="menu-btn" href="about">Add new brand +</a></li>
        </ul>
      </div>

    )
}

export default NavPrimary