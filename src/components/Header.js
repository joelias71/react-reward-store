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
                {/*<Link to='/react-reward-store/shop' >
                    <div className='header__shopping_cart'>
                        <label>0</label>
                        <ShoppingCartIcon />
                    </div>
                </Link>*/}
            </div>
            <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
                <ul className='navbar-menu__items'>
                    <li className='navbar-menu__items__toggle' >
                        <Link to='#' >
                            <CloseIcon className='navbar-menu__menu-bars' onClick={showSidebar} />
                        </Link>
                    </li>
                    <li className='navbar-menu__user' >
                        <label>Julia Coi</label>
                        <div className='navbar-menu__user__widget'>
                            <label>{amountFormat(500)}</label>
                            <AttachMoneyIcon />
                        </div>
                    </li>
                    <li key='electronics' className='navbar-text' onClick={showSidebar} >
                        <Link to='/react-reward-store' >
                            Electronics
                        </Link>
                    </li>
                    <li key='history' className='navbar-text' onClick={showSidebar} >
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
