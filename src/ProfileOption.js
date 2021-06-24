import React from 'react'
import { Avatar } from '@material-ui/core'
import Profile from './asset/profile.jpg'
import {Link} from 'react-router-dom'
import './ProfileOption.css'
import SidebarRow from './SidebarRow'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';
function ProfileOption() {
    return (
        <div className='profileOption'>
            <div className='profileOpt__head'>
                <Avatar src={Profile}/>
                <div className='profileOpt__info'>
                    <h2>Ohidujjaman Fahad</h2>
                    <Link className='mannage_link' to=''>Mannage your google account</Link>
                </div>
            </div>
            <hr />
            <SidebarRow Icon={AccountBoxIcon} title='Your Channel'/>
            <SidebarRow Icon={MonetizationOnIcon} title='Purchase and membership'/>
            <SidebarRow Icon={SettingsIcon} title='Youtube studio'/>
            <SidebarRow Icon={SupervisorAccountIcon} title='Switch Account'/>
            <SidebarRow Icon={ExitToAppIcon} title='Sign Out'/>
            <hr />

            <SidebarRow Icon={Brightness6Icon} title='Appearence'/>
            <SidebarRow Icon={TranslateIcon} title='Language:English'/>
            <SidebarRow Icon={LanguageIcon} title='Location:Bangladesh'/>
            <SidebarRow Icon={SettingsIcon} title='Setting'/>
            <SidebarRow Icon={HelpIcon} title='Help'/>
            <SidebarRow Icon={FeedbackIcon} title='Send Feedback'/>
            <SidebarRow Icon={KeyboardIcon} title='Keyboard Shortcuts'/>
        </div>
    )
}

export default ProfileOption
