import {MdHomeFilled} from 'react-icons/md'
import {SiSpotify} from 'react-icons/si'
import {BiSearch} from 'react-icons/bi'
import {VscLibrary} from 'react-icons/vsc'
import {BsPlusSquareFill, BsFillHeartFill} from 'react-icons/bs'
import './sideBar.css'

const SideBar = () => {
  return (
    <>
      <div className='flex-row logo-box'>
        <SiSpotify style={{fontSize:'36px',color: '#fff'}}/>
        <h2>Spotify<sup className='logo-icon'>R</sup></h2>
      </div>
      <div className='sideList'>
        <div className='flex-row'>
            <MdHomeFilled/>
            <h3>Home</h3>
        </div>
        <div className='flex-row'>
            <BiSearch/>
            <h3>Search</h3>
        </div>
        <div className='flex-row'>
            <VscLibrary/>
            <h3>Your Library</h3>
        </div>
      </div>
      <div className='sideList'>
        <div className='flex-row'>
            <BsPlusSquareFill style={{fontSize:'25px'}}/>
            <h3>Create Playlist</h3>
        </div>
        <div className='flex-row'>
            <div className='color-icon'><BsFillHeartFill/></div>
            <h3>Liked Songs</h3>
        </div>
      </div>
      <div className='sideBar-footer'>
          <p>Cookies</p>
          <p>Privacy</p>
      </div>
    </>
  )
}

export default SideBar