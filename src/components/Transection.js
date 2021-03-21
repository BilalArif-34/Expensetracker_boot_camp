import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transection = ({transection}) => {

    const {delTransection} = useContext(GlobalContext)

    const sign = transection.transectionAmount >0 ? '+':'-';
    const transectionType = transection.transectionAmount > 0 ? "plus":"minus";
    
    return (
        
        <li className={transectionType}> 
            {transection.description}
            <span> {sign}${Math.abs(transection.transectionAmount)} </span> 
            <button className="delete-btn"
                    onClick={()=> delTransection(transection.id)}
                    >X</button>
        </li>

    )
}
