
const NavPrimary = ({ username }) => {
    return (
      <div className="navbar">

        <ul id="menu">
          <h1 id="intro" >Flip</h1>
          <li className="menu-item"><a className="menu-btn" href="home">Home</a></li>
          <li className="menu-item"><a className="menu-btn" href="brand">Brand</a></li>
          <li className="menu-item"><a className="menu-btn" href="history">History</a></li>
          <li className="menu-item"><a className="menu-btn" href="about">About</a></li>
        </ul>
      </div>

    )
}

export default NavPrimary
