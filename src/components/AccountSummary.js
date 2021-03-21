import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const AccountSummary = () => {

    const {transections} = useContext(GlobalContext);
    const transectionAmounts = transections.map(transection => transection.transectionAmount)

    const income = transectionAmounts
    .filter(transection => transection > 0)
    .reduce((acc, transection) => (acc += transection),0)
    .toFixed(2)

    const expense = transectionAmounts
    .filter(transection => transection < 0)
    .reduce((acc, transection) => (acc += transection),0)
    .toFixed(2)

    return (
        <div className="inc-exp-container">
            <div> 
                <h4> Income </h4>
                <p className="money plus"> 
                    ${income}
                </p> 

                </div>
            <div> 
            <h4> Expense </h4>
            <p className="money minus"> 
                ${Math.abs(expense)} 
            </p> 
                </div>
            
        </div>
    )
}
