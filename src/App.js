import React, { useState, useEffect } from 'react';
import { Switch, Route} from  "react-router-dom";
import Dealer from './components/Dealer/Dealer';
import Footer from './components/Footer';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import { InventoryContext } from './components/InventoryContext';
import Navbar from './components/Navbar';

const BASE_URL = "http://localhost:3000/dealers";

function App() {
  const [inventory, setInventory] = useState([])
  
 
  useEffect (() => {
  
    fetch(BASE_URL)
    .then(r => r.json())
    .then(InvetoryData => setInventory(InvetoryData))
    }, [])

  return (
    <div className="App">
     <Navbar/>
     <Switch>
    <InventoryContext.Provider value={{inventory, setInventory}}>
     <Route exact path="/">
       <Home/>
       </Route>
       <Route exact path="/dealers">
      <Dealer/>
       </Route>
       <Route exact path="/inventory">
        <Inventory/>
       </Route>
       </InventoryContext.Provider>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
