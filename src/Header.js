import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar } from '@material-ui/core';
import Youtube from './asset/youtube.svg'
import Profile from './asset/profile.jpg'
import { Link } from 'react-router-dom';
import './Header.css'
import ProfileOption from './ProfileOption';
import AppOption from './AppOption';
import UploadVideo from './UploadVideo';
import Notification from './Notification';
import Sidebar from './Sidebar';
function Header() {
    const [inputSearch,setInputSearch] = useState('');
    const [profileOption,setProfileOption] = useState(false);
    const [appOption,setAppOption] = useState(false);
    const [videoOption,setVideoOption] = useState(false);
    const [notification,setNotification] = useState(false);
    const [sidebar,setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!sidebar);
    const handleNotification = () => setNotification(!notification);
    const handleVideoOption = () => setVideoOption(!videoOption);
    const handleAppOption = () => setAppOption(!appOption);
    const handleProfileOption = () => setProfileOption(!profileOption)
    return (
        <div className="header">
           <div className='header__left'>
            <MenuIcon onClick={handleSidebar} className='menu__icon'/>
            {sidebar && <Sidebar />}
            <Link to='/' className='youtube__home'>
            <img className='header__logo' alt='Youtube' src={Youtube} />
            <h3>Youtube</h3>
            </Link>
           </div>

           <div className='header__input'>
           <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type='text' />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header__inputButton' />
            </Link>
          
           </div>
           <div className='mic__icon'>

           <MicIcon />
           </div>
           <div className='header__icons'>
            <VideoCallIcon onClick={handleVideoOption} className='header__icon' />
            {videoOption && <UploadVideo />}
            <AppsIcon onClick={handleAppOption} className='header__icon' />
            {appOption && <AppOption />}
            <NotificationsIcon onClick={handleNotification} className='header__icon' />
            {notification && <Notification />}
            <Avatar onClick={handleProfileOption} className='profile' src={Profile} />
            {profileOption && <ProfileOption />}
            
           </div>
            
        </div>
    )
}

export default Header
