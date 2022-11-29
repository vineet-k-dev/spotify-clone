import { BsApple } from "react-icons/bs"
import { GrFacebook } from "react-icons/gr"
import { FcGoogle } from "react-icons/fc"
import { SiSpotify } from "react-icons/si"
import './login.css'
import Input from "../../../atom/InputField/Input"

const Login = () => {
  return (
    <div className="authPage">
        <div className='flex-rows logo-boxs'>
            <SiSpotify style={{fontSize:'55px'}}/>
            <h2>Spotify<sup className='logo-icon'>R</sup></h2>
        </div>
        <div className="auth-content">
            <h4>To continue, login to Spotify.</h4>
            <button className="login-btn fb-login">
                <GrFacebook/>
                <span>CONTINUE WITH FACEBOOK</span>
            </button>
            <button className="login-btn apple-login">
                <BsApple/>
                <span>CONTINUE WITH APPLE</span>
            </button>
            <button className="login-btn google-login">
                <FcGoogle/>
                <span>CONTINUE WITH GOOGLE</span>
            </button>
            <button className="login-btn phone-login">
                <span>CONTINUE WITH PHONE NUMBER</span>
            </button>
            <div className='flex-rows'>
                <div className="bar"/>
                <span> OR </span>
                <div className="bar"/>
            </div>
            <div className="form">
                <Input
                    title='Email Address or Username'
                    type='text'
                    labelPosition='left'
                    display='column'
                />
                <Input
                    title='Password'
                    type='text'
                    labelPosition='left'
                    display='column'
                />
                <span>Forgot your password?</span>
                <div className='flex-rows'>
                    <Input
                        title='Remember Me'
                        type='checkbox'
                        labelPosition='right'
                        display='row'
                    />
                    <button className="login">Login</button>
                </div>
            </div>
            <div className="barFull"/>
            <h4>Don't have an account?</h4>
            <button className="login-btn phone-login">
                <span>SIGN UP FOR SPOTIFY</span>
            </button>
        </div>
    </div>
  )
}

export default Login