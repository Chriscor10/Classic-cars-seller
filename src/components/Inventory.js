import React, {useContext} from 'react'
import { Card, Button} from 'react-bootstrap';
import { InventoryContext } from './InventoryContext';
import './Inventory.css';


function Inventory() {
  const {inventory, setInventory} = useContext(InventoryContext);

    
    
    return (
      <div> 
        {inventory.map((inventory) => {
         return (
           <div className="inventory">
             {inventory.Car.map((Car => {
               return(
                 <div className="container">
       <Card className="card border-dark mb-3"  style={{ width: '18rem', height: '25rem'}}>
       <img className="image" variant="top" src={Car.image} />
         <Card.Body>
          <Card.Title> {Car.brand}</Card.Title>
           <Card.Text>{Car.model} {Car.year}</Card.Text>
           <Card.Text>Miles: {Car.Mileage}</Card.Text>
           <Card.Text>{Car.Price}</Card.Text>
           <Button variant="dark">Details</Button>
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
