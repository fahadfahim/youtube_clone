import React from 'react'
import RecommendedButton from './RecommendedButton'
import './RecommendedVideos.css'
import VideoCard from './VideoCard.js'
function RecommendedVideos() {
    return (
        <div className='recommendedvideos'>
            <div className='reco__btn'>
                <RecommendedButton title='All' />
                <RecommendedButton title='JavaScript' />
                <RecommendedButton title='React Js' />
                <RecommendedButton title='Travel' />
                <RecommendedButton title='Football' />
                <RecommendedButton title='Website' />
                <RecommendedButton title='Python' />
                <RecommendedButton title='iOS' />
                <RecommendedButton title='Android' />
                <RecommendedButton title='Linux' />
          
                <RecommendedButton title='Plane' />
              
                <RecommendedButton title='NOde Js' />
                <RecommendedButton title='React Native' />
                <RecommendedButton title='Flutter' />
            </div>
            
            <div className='recommendedvideos__videos'>
                <VideoCard 
                title='How to Become a web developer | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=1'
                channel='Sonny Sangha'
                image='https://source.unsplash.com/random/200x200?sig=999'
                />
                 <VideoCard 
                title='How to make beautiful responsive website using React | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=2'
                channel='Traversy media'
                image='https://source.unsplash.com/random/200x200?sig=858'
                />
                 <VideoCard 
                title='Master in Redux | 2020/2021'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=3'
                channel='Coding Addict'
                image='https://source.unsplash.com/random/200x200?sig=768'
                />
                 <VideoCard 
                title='Top 10 Beautiful place in the world | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=4'
                channel='Johnsmigla'
                image='https://source.unsplash.com/random/200x200?sig=606'
                />
                 <VideoCard 
                title='JavaScript crash course | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=5'
                channel='Udemy'
                image='https://picsum.photos/id/1/350/200'
                />
                 <VideoCard 
                title='Top 10 Beautiful place in Europe | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://source.unsplash.com/random/200x200?sig=6'
                channel='Sonny Sangha'
                image='https://source.unsplash.com/random/200x200?sig=202'
                />
                 <VideoCard 
                title='How to Become a Freelancing web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Dreak Beans'
                image='https://source.unsplash.com/random/200x200?sig=158'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='LevelUpTaught'
                image='https://source.unsplash.com/random/200x200?sig=144'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='DevEd'
                image='https://source.unsplash.com/random/200x200?sig=139'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Clever Programmer'
                image='https://source.unsplash.com/random/200x200?sig=102'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='CodeWars'
                image='https://source.unsplash.com/random/200x200?sig=911'
                />

               <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Coding Ninja'
                image='https://source.unsplash.com/random/200x200?sig=310'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Fahad'
                image='https://source.unsplash.com/random/200x200?sig=510'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Sonny Sangha'
                image='https://source.unsplash.com/random/200x200?sig=710'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Sonny Sangha'
                image='https://source.unsplash.com/random/200x200?sig=41'
                />
                 <VideoCard 
                title='Become a web developer in 30 days | 2019/2020'
                views='1.1M Views'
                timestamp='2 days ago'
                channelImage='https://picsum.photos/id/1005/35/25'
                channel='Stanford University'
                image='https://source.unsplash.com/random/200x200?sig=40'
                />
            </div>
        </div>
    )
}

export default RecommendedVideos
