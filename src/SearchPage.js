import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import ChannelRow from './ChannelRow'
import './SearchPage.css'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlined />
                <h2>FILTRE</h2>
            </div>
            <hr/>
            <ChannelRow 
            image='https://picsum.photos/id/100/350/200'
            channel ='Clever Programmer'
            verified 
            subs ='659K'
            noOfVideos ={383}
            description = 'You can find awsome programming videos here You can find awsome programming videos here You can find awsome programming videos here'
            />
            <hr />

            <VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1020/350/200'
            />

<VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1022/350/200'
            />

<VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1023/350/200'
            />

<VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1024/350/200'
            />

<VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1025/350/200'
            />
                 <VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1028/350/200'
            />
                 <VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1027/350/200'
            />
                 <VideoRow 
            views='1.4M'
            subs='659K'
            description='Do you want to a learn free web development check out the channel'
            timestamp='1 Hours ago'
            channel='Clever Programmer'
            title='Lets build a beautiful website using React Js'
            image='https://picsum.photos/id/1031/350/200'
            />

        </div>
    )
}

export default SearchPage
