import React, {useContext} from 'react'
import { Button, Card } from 'react-bootstrap';
import { InventoryContext } from './InventoryContext';


function Dealers() {
  const {inventory, setInventory} = useContext(InventoryContext);
 
    return (
        <div>
          {inventory.map(inventory => {
         return (
         <div>
          <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={inventory.logoimg} />
         <Card.Body>
          <Card.Title>{inventory.username}</Card.Title>
           <Card.Text>{inventory.email}</Card.Text>
           <Card.Text>{inventory.phonenumber}</Card.Text>
           <Card.Text>{inventory.city}</Card.Text>
           <Card.Text>{inventory.state}</Card.Text>
           <Card.Text>{inventory.zipcode}</Card.Text>
         </Card.Body>
       </Card>
       </div>
          )})}
        </div>
    );
}

export default Dealers;
