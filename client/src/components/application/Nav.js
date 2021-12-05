import Logo from '../../resources/logo.png'

const NavPrimary = ({ username, logout }) => {
    return (
      <div className="navbar">

        <ul id="menu">
          <img id="logo" src={ Logo } alt="" />
          <li className="menu-item"><a className="menu-btn" href="home">Home</a></li>
          <li className="menu-item"><a className="menu-btn" href="brand">Brand</a></li>
          <li className="menu-item"><a className="menu-btn" href="history">History</a></li>
          <li className="menu-item"><a className="menu-btn" href="about">About</a></li>
          <li className="menu-item"><a className="menu-btn" href="about" onClick={() => logout}>Log out</a></li>
          <h3 id="intro" >Welcome, { username }</h3>
          <li className="menu-item"><a className="menu-btn" href="about">Add new item +</a></li>
          <li className="menu-item"><a className="menu-btn" href="about">Add new brand +</a></li>
        </ul>
      </div>

    )
}

export default NavPrimary
