// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Link to="/" className="nav-link">
      <Header />
      <div className="large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="img"
        />
      </div>
      <div className="small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="img"
        />
      </div>
    </Link>
  </>
)

export default Home
