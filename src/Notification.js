import React from 'react'
import './Notification.css'
import SettingsIcon from '@material-ui/icons/Settings';
import Profile from './asset/profile.jpg'
import NotificationRow from './NotificationRow'
function Notification() {
    return (
        <div className='notification'>
              <div className='notification__head'>
            <div className='notification__text'>
                <h3>Notification</h3>
            </div>
            <div className='notification__icon'>
                <SettingsIcon />
            </div>
            </div>
            <hr />

            <NotificationRow channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=1'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=9'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=2'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=3'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=4'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=5'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=6'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=7'/>

            <NotificationRow  channelImg={Profile} channelName='Traversy Media' videoTitle='Make wonderful website using React Js' timestamp='1 hour ago' videoImg='https://source.unsplash.com/random/200x200?sig=8'/>

        </div>
    )
}

export default Notification
