import React from 'react'
import './NotificationRow.css'

function NotificationRow({notification,Icon,channelImg,channelName,videoTitle,timestamp,videoImg}) {

    return (
        <div className='notificationrow'>
          
      
            <div className='notification__details'>
            <div className='channel__icon'>
            <img src={channelImg} className='channel__img'/>
            </div>
            <div className='notification__desc'>
                <p className='channel__name'>{channelName}  uploaded : {videoTitle}</p>
                <span className='video__timestamp'>{timestamp}</span>
            </div>
            <div className='notification__img'>
            <img src={videoImg} className='video__img'/>
            </div>
            </div>

        </div>
    )

}

export default NotificationRow
