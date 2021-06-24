import React from 'react'
import './AppOptionRow.css'
function AppOptionRow({title,Icon,selected}) {
    return (
        <div className={`appsidebarRow ${selected && 'selected'}`}>
            <Icon className='appsidebarRow__icon'/>
            <h2  className="appsidebarRow__title">
                {title}
            </h2>
        </div>
    )
}

export default AppOptionRow
