import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import { ExpandMoreOutlined, History, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater } from '@material-ui/icons'
import { Whatshot } from '@material-ui/icons'
function Sidebar() {
    return (
        <div className='sidebar'>
          
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={Subscriptions} title="Trending" />
            <SidebarRow Icon={Whatshot} title="Subscription" />
            <hr />
            <SidebarRow  Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your videos" />
            <SidebarRow Icon={WatchLater} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
