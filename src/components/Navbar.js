import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header className='main'>
        <div className='container'>
          <Link to='/' className='logo' title='Logo'>
            <div className='icon'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='text'>
              see<span>littlethings</span>
            </div>
          </Link>
          <div className='right'>
            <nav className='top'>
              <ul className={`navbar-menu ${this.state.navBarActiveClass}`}>
                <li>
                  <Link className='navbar-item' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='navbar-item' to='/products'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link className='navbar-item' to='/blog'>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <Link className='btn' to='/contact'>
              Kontakt
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
