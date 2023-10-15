import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='nav-wrapper'>
        <p className='text-white'>
          <Link to={'/'}>LOGO</Link>
        </p>
        <ul className='nav-menues'>
          <li>
            <Link to='/'>Beranda</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
