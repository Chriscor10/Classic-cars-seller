import React, {useContext} from 'react'
import { Button, Card } from 'react-bootstrap';
import { InventoryContext } from './InventoryContext';


function Inventory() {
  const {inventory, setInventory} = useContext(InventoryContext);
  

    
    return (
    
      <div> 
        {inventory.map(inventory => {
         return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={inventory.Car.image} />
         <Card.Body>
          <Card.Title>{inventory.Car.brand}</Card.Title>
           <Card.Text>{inventory.Car.model} {inventory.Car.year}</Card.Text>
           <Card.Text>Miles: {inventory.Car.Mileage}</Card.Text>
           <Card.Text>{inventory.Car.Price}</Card.Text>
         </Card.Body>
       </Card>
        )})}
      </div>
    )
}

export default Inventory
