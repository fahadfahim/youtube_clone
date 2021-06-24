import React from 'react'
import './AppOption.css'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AppOptionRow from './AppOptionRow';
function AppOption() {
    return (
        <div className='appoption'>
            <AppOptionRow Icon={DesktopMacIcon} title='YouTube Tv' />
            <hr />
            <AppOptionRow Icon={PlayCircleFilledIcon} title='YouTube Music'/>
            <AppOptionRow Icon={YouTubeIcon} title='YouTube Kids'/>
            <hr />
            <AppOptionRow  Icon={YouTubeIcon} title='Creator Academy'/>
            <AppOptionRow  Icon={YouTubeIcon} title='YouTube for Artist'/>
            
        </div>
    )
}

export default AppOption
