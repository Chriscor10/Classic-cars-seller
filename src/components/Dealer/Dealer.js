import React, {useContext} from 'react';
import { InventoryContext } from '../InventoryContext';
import './Dealer.css'

export default function Dealer() {
    const {inventory, setInventory} = useContext(InventoryContext);
    


  return <div>
     {inventory.map((e) => { 
         return <div className='card'>
            <h2>{e.name}</h2>
            <h3>{e.phone_number}</h3>
            <h4>{e.email}</h4>
             </div>

     })}
  </div>;
}
