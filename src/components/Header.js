import React, { useState, useEffect } from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { amountFormat } from '../util/format'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'

function Header({ cleanup, fetchUser, name, points }) {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    const clean = () => {
        cleanup()
        showSidebar()
    }

    useEffect(() => {
        fetchUser()
    },[fetchUser])

    return (
        <>
            <div className='header'>
                <Link to='#' >
                    <MenuIcon className='navbar__menu-bars' onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
                <ul className='navbar-menu__items'>
                    <li className='navbar-menu__items__toggle' >
                        <Link to='#' >
                            <CloseIcon className='navbar-menu__menu-bars' onClick={showSidebar} />
                        </Link>
                    </li>
                    <li className='navbar-menu__user' >
                        <label>{name}</label>
                        <div className='navbar-menu__user__widget'>
                            <label>{amountFormat(points)}</label>
                            <AttachMoneyIcon />
                        </div>
                    </li>
                    <li key='electronics' className='navbar-text' onClick={clean} >
                        <Link to='/react-reward-store' >
                            Electronics
                        </Link>
                    </li>
                    <li key='history' className='navbar-text' onClick={clean} >
                        <Link to='/react-reward-store/history' >
                            History
                        </Link>
                    </li>
                    <li key='addCoins' className='navbar-text' onClick={showSidebar} >
                        <Link to='/react-reward-store/addCoins' >
                            <Button>
                                Add Coins
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
