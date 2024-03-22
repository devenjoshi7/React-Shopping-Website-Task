
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
          <a className='home-page' href="/Home">C</a>
           <a className='nav-pages' href='/Home'>Home</a>
           <a className='nav-pages' href='/About'>About</a>
           <a className='nav-pages' href='/'>Products</a>
           <a className='nav-pages' href='/Cart'>Cart</a>

          <div className='icons-container'>
            <MdSunny className='theme-icon' size={24} />
            <a href = '/Cart'>
              <PiShoppingCartLight className='cart-icon' size={28} />
            </a>
          </div>
        </nav>
      </div>

    </nav>
  )
}

export default Nav