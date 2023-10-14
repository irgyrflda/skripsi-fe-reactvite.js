import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='nav-wrapper'>
          <li>
            <Link to='/'>Beranda</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
