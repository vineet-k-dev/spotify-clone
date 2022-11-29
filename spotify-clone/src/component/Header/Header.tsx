import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className='page-toggle'>
        <MdArrowBackIosNew/>
        <MdArrowForwardIos/>
      </div>
      <div className='signUp-signIn'>
        <button className='transparent-button'>Sign Up</button>
        <Link to="/login"><button className='color-button'>Log In</button></Link>
      </div>
    </div>
  )
}

export default Header