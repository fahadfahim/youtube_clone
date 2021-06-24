import React from 'react'
import './SmallSidebarRow.css'
function SmallSidebarRow({selected,Icon,title}) {
    return (
        <div className={`smallsidebarRow ${selected && 'selected'}`}>
            <Icon className='smallsidebarRow__icon'/>
            <h2  className="smallsidebarRow__title">
                {title}
            </h2>
        </div>
    )
}

export default SmallSidebarRow
