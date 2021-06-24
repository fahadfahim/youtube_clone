import React from 'react'
import './RecommendedButton.css'
import {Link} from 'react-router-dom'
function RecommendedButton({title}) {
    return (
        <div className='rec__btn'>
            <Link to='' className='recommended__btn'>
            {title}
            </Link>
        {/* <button className='recommended__btn'>
            
        </button> */}
        </div>
    )
}

export default RecommendedButton
