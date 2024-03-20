import './Nav.css'
import {PiShoppingCartLight} from 'react-icons/pi'
import {MdSunny} from 'react-icons/md'

function Nav() {
  return (
    <nav className='main-nav'>

      <div className='profile-container'>
        <nav className='profile-nav'>
          <ul>
            <li> <a className='account-nav' href='Login.js'>Sign In/Guest</a> </li>
            <li> <a className='account-nav' href='SignIn.js'>Create Account</a> </li>
          </ul>  
        </nav>
      </div>

      <div className='nav-container'>
        <nav className='pages-container'>
          <a className='home-page' href="Home.js">C</a>
           <a className='nav-pages' href='Home.js'>Home</a>
           <a className='nav-pages' href='About.js'>About</a>
           <a className='nav-pages' href='Products.js'>Products</a>
           <a className='nav-pages' href='Cart.js'>Cart</a>

          <div className='icons-container'>
            <MdSunny className='theme-icon' size={24} />
            <a href = 'Cart.js'>
              <PiShoppingCartLight className='cart-icon' size={28} />
            </a>
          </div>
        </nav>
      </div>

    </nav>
  )
}

export default Nav