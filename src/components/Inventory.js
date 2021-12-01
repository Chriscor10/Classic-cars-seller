import React, {useContext} from 'react'
import { Button, Card } from 'react-bootstrap';
import { InventoryContext } from './InventoryContext';


function Inventory() {
  const {inventory, setInventory} = useContext(InventoryContext);

    
    
    return (
      <div> 
        {inventory.map((inventory) => {
         return (
           <div>
             {inventory.Car.map((Car => {
               return(
                 <div>
                   <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={Car.image} />
         <Card.Body>
          <Card.Title></Card.Title>
           <Card.Text>{Car.model} {Car.year}</Card.Text>
           <Card.Text>Miles: {Car.Mileage}</Card.Text>
           <Card.Text>{Car.Price}</Card.Text>
         </Card.Body>
       </Card>
                 </div>
               )
             }))}
       </div>
        )})}
      </div>
    );
}

export default Inventory;
