import React, { useState } from 'react'
import RadioBtn from '../components/RadioBtn'
import { Button } from '@material-ui/core'
import Modal from '../components/Modal'
import { amountFormat } from '../util/format'
import axios from '../data/axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function AddCoins({ addUserPoints }) {
    
    const [isOpen, setIsOpen] = useState(false)
    const [coins, setCoins] = useState(0)
    const [isModalLoading, setIsModalLoading] = useState(false)

    const submitPoints = () => {
        setIsModalLoading(true)
        axios.post('user/points',{ amount: Number(coins)})
        .then(response => {
            setIsModalLoading(false)
            setIsOpen(false)
            toast.success('The amount of coins where successfully added to your account')
            addUserPoints(coins)
        }).catch(error => {
            setIsModalLoading(false)
            toast.error('A problem occur, please contact the administrator')
        })
    }

    return (
        <main>
            <div className='storeContainer' >
                <div className='addCoinsContainer__Card'>
                    <h1>You want to add more coins to your account ?</h1>
                    <p>Choose the amount you want to add : </p>
                    <form>
                        <fieldset id="addCoin" onChange={e => setCoins(e.target.value)} >
                            <RadioBtn text='$ 1,000 ' value={1000} group='addCoin' />
                            <RadioBtn text='$ 5,000 ' value={5000} group='addCoin' />
                            <RadioBtn text='$ 7,500 ' value={7500} group='addCoin' />
                        </fieldset>
                        <Button onClick={() => setIsOpen(true)}
                                style={{visibility: (coins === 0)?'hidden':'visible'}}>
                            Add coins
                        </Button>
                    </form>
                </div>
            </div>
            <Modal 
                open={isOpen} 
                onClose={() => setIsOpen(false)}
                submit={submitPoints}
                title='Add coins'
                onLoad={isModalLoading}
                approvalBtnTxt='Add Coins' >
                <p>Want to add <strong>${amountFormat(coins)}</strong> coins to your account?</p>
            </Modal>
        </main>
    )
}

export default AddCoins
