import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {


    const {transections} = useContext(GlobalContext);

    const transectionAmounts = transections.map(transection => transection.transectionAmount);
    const balance = transectionAmounts
    .reduce((acc,item)=> (acc += item),0)
    .toFixed(2)

    return (
        <div>
            <h4> Current Balance</h4>
            <h1 id="balance"> ${balance} </h1>
        </div>
    )
}
