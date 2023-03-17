// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Link to="/about">
      <Header />
      <div className="large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          className="image"
          alt="about"
        />
      </div>
      <div className="small-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          className="image"
          alt="about"
        />
      </div>
    </Link>
  </>
)

export default About
