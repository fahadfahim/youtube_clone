import React from 'react'
import './SmallSidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import ExploreIcon from '@material-ui/icons/Explore';
import { ExpandMoreOutlined, History, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater } from '@material-ui/icons'
import SmallSidebarRow from './SmallSidebarRow'
function SmallSidebar() {
    return (
        <div className='smallsidebar'>
            <SmallSidebarRow selected Icon={HomeIcon} title='Home'/>
            <SmallSidebarRow Icon={ExploreIcon} title='Explore'/>
            <SmallSidebarRow Icon={Subscriptions} title='Subscriptions'/>
            <SmallSidebarRow Icon={VideoLibrary} title='Library'/>
        </div>
    )
}

export default SmallSidebar
