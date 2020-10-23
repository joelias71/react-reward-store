import React, {useState} from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { amountFormat } from '../util/format'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='header'>
                <Link to='#' >
                    <MenuIcon className='navbar__menu-bars' onClick={showSidebar} />
                </Link>
                <div className='header__user'>
                    <label>Julia Coi</label>
                    <div className='header__user__widget'>
                        <label>{amountFormat(500)}</label>
                        <AttachMoneyIcon />
                    </div>
                    <div className='header__shopping_cart'>
                        <label>0</label>
                        <ShoppingCartIcon />
                    </div>
                </div>
            </div>
            {/*<nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
                <ul className='navbar-menu__items'>
                    <li className='navbar-menu__items__toggle' >
                        <Link to='#' >
                            <CloseIcon className='navbar-menu__menu-bars' onClick={showSidebar} />
                        </Link>
                    </li>
                    <li key='electronics' className='navbar-menu__menu-bars' onClick={showSidebar} >
                        <Link to='/' >
                            <span>Electronics</span>
                        </Link>
                    </li>
                    <li key='history' className='navbar-menu__menu-bars' onClick={showSidebar} >
                        <Link to='/history' >
                            <span>History</span>
                        </Link>
                    </li>
                </ul>
                <Button>
                    Add Coins
                </Button>
            </nav>*/}
        </>
    )
}

export default Header
