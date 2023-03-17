// Write your code here
import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = props => {
  const clickToHomePage = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <>
      <nav className="nav-container">
        <button type="button" onClick={clickToHomePage} className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </button>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="button"
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu />
              </button>
            }
          >
            {close => (
              <>
                <ul>
                  <Link to="/" className="nav-link">
                    <li className="">
                      <AiFillHome />
                      <p className="link-item">Home</p>
                    </li>
                  </Link>
                  <Link to="/about" className="nav-link">
                    <li className="">
                      <BsInfoCircleFill />
                      <p className="link-item">About</p>
                    </li>
                  </Link>
                </ul>
                <button
                  type="button"
                  className="trigger-button button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </>
            )}
          </Popup>
        </div>
      </nav>
      <hr />
    </>
  )
}
export default withRouter(Header)
