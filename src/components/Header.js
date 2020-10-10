import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Header() {
    return (
        <div className='header'>
            <label>Julia Coi</label>
            <div className='header__widget'>
                <label>600</label>
                <AttachMoneyIcon />
            </div>
        </div>
    )
}

export default Header
