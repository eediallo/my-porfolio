import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-left">
          <li>
            <Link to="/"><span className="e">𝖊</span>DIALLO</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
