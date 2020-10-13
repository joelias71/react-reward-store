import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Button } from '@material-ui/core'

function Header() {
    return (
        <div className='header'>
            <Button>
                Agregar Monedas
            </Button>
            <div className='header__user'>
                <label>Julia Coi</label>
                <div className='header__user__widget'>
                    <label>6000</label>
                    <AttachMoneyIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
