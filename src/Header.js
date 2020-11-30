import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt='Sven Notermans'/*{user?.displayName} src='' {user?.photoURL}*/ />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input className="header__input" placeholder="Search Clever Programmer" />
            </div>
            <div className="header__right">
              <HelpOutlineIcon />  
            </div>
        </div>
    )
}

export default Header
