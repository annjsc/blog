import {Link} from "react-router-dom";

export default function Header(){

  return(
    <header>
    <a href="/" className="logo">Journal</a>

    <nav>
      <Link to="/entries" className="navLinks">Entries</Link>
      <Link to="/gallery" className="navLinks">Gallery</Link>
      <Link to="/login" className="navLinks">Login</Link>
      <Link to="/register" className="navLinks">Sign Up</Link>
    </nav>
  </header>
  );
}