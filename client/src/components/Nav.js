
const NavPrimary = ({ username, logout }) => {
    return (
      <div className="navbar">

        <ul id="menu">
          <h1 id="intro" >Flip</h1>
          <li className="menu-item"><a className="menu-btn" href="home">Home</a></li>
          <li className="menu-item"><a className="menu-btn" href="brand">Brand</a></li>
          <li className="menu-item"><a className="menu-btn" href="history">History</a></li>
          <li className="menu-item"><a className="menu-btn" href="about">About</a></li>
          <li className="menu-item"><a className="menu-btn" href="about" onClick={() => logout}>Log out</a></li>
          <h3 id="intro" >Welcome, { username }</h3>
        </ul>
      </div>

    )
}

export default NavPrimary
