import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransection = () => {

    const [description, setDescription] = useState('');
    const [transectionAmount, setTransecrtionAmount] = useState('');

    const {addTransection} = useContext(GlobalContext);


    const onSubmit = (e) => {
        e.preventDefault();

        const newTransectoin = {
            id : new Date().getTime(),
            description,
            transectionAmount: +transectionAmount
        }

        addTransection(newTransectoin);
    }

    return (
        <div>
            <h3> Add New Transection</h3>
            <form onSubmit={onSubmit}> 
            <div className="form-control"> 
                <label htmlFor="description"> 
                Description
                </label>
                <input 
                    type="text" 
                    id="description" 
                    value = {description}
                    onChange = {(e)=> setDescription(e.target.value) } 
                    placeholder="Details of the Transection"  />
            </div>
            <div className="form-control">   
            <label htmlFor="transectionamount"> 
                        Transection Amount
            </label>
            <input 
                    type="number" 
                    id="transectionAmount" 
                    value = {transectionAmount}
                    onChange = {(e)=> setTransecrtionAmount (e.target.value) }
                    placeholder="Enter Positive value for Income and Negarive for Expense"
                    required ="required"   />
            
            </div>
            <button className="btn"> 
                Add Transaction
            </button>
            </form> 
        </div>
    )
}


