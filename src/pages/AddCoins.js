import React from 'react'
import RadioBtn from '../components/RadioBtn'
import { Button } from '@material-ui/core'

function AddCoins() {
    return (
        <main>
            <div className='storeContainer' >
                <div className='addCoinsContainer__Card'>
                    <h1>You want to add more coins to your account ?</h1>
                    <p>Choose the amount you want to add : </p>
                    <form>
                        <fieldset id="addCoin" onChange={e => console.log(e.target.value)} >
                            <RadioBtn text='$ 1,000 ' value='1000' group='addCoin' />
                            <RadioBtn text='$ 5,000 ' value='5000' group='addCoin' />
                            <RadioBtn text='$ 7,500 ' value='7500' group='addCoin' />
                        </fieldset>
                        <Button>
                            Add coins
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddCoins
