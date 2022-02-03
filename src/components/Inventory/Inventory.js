import React, {useContext} from 'react';
import { InventoryContext } from '../InventoryContext';

function Inventory() {
    const {inventory, setInventory} = useContext(InventoryContext);


  return <div className='card'>
      {inventory.map((e) => e.cars.map((i) => {
          return (
          <div>
              <h2>{i.brand}</h2>
              <h3>{i.model}</h3>
              <h4>{i.year}</h4>
              
              </div>
              )}))}
  </div>;
}

export default Inventory;
