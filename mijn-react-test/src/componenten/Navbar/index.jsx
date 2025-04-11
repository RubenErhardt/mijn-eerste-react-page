import './Navbar.css';

function Navbar() {
    return (
     <nav className="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/over">Over</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/diensten">Diensten</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
        </ul>
     </nav>
    );
  }
  
  export default Navbar;
  