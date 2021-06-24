import React from 'react'
import './UploadVideo.css'
import LiveTvIcon from '@material-ui/icons/LiveTv';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import AppOptionRow from './AppOptionRow';
function UploadVideo() {
    return (
        <div className='uploadvideo'>
            <AppOptionRow Icon={LiveTvIcon} title='Upload Video'/>
            <AppOptionRow Icon={WifiTetheringIcon} title='Go Live'/>
        </div>
    )
}

export default UploadVideo
