import React, { useState, useEffect } from 'react';
import { Switch, Route} from  "react-router-dom";
import Dealer from './components/Dealer/Dealer';
import Footer from './components/Footer';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import { InventoryContext } from './components/InventoryContext';
import LogInPage from './components/LogInPage/LogInPage';
import Navbar from './components/Navbar';
import SignUpPage from './components/SignUpPage/SignUpPage';

const BASE_URL = "http://localhost:3000/dealers";

function App() {
  const [inventory, setInventory] = useState([])
  
 
  useEffect (() => {
  
    fetch(BASE_URL)
    .then(r => r.json())
    .then(InvetoryData => setInventory(InvetoryData))
    }, [])

    function addDealer(dealer) {
      const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dealer)
    }
   fetch(BASE_URL, config)
   .then(r => r.json())
   .then(dealers => {
     const newDealer = [...inventory, dealers]
    })
  }
    

  return (
    <div className="App">
     <Navbar/>
     <Switch>
    <InventoryContext.Provider value={{inventory, setInventory, addDealer}}>
     <Route exact path="/">
       <Home/>
       </Route>
       <Route exact path="/dealers">
      <Dealer/>
       </Route>
       <Route exact path="/inventory">
        <Inventory/>
       </Route>
       <Route exact path="/signup">
         <SignUpPage/>
       </Route>
       <Route exact path="/login">
      <LogInPage/>
       </Route>
       </InventoryContext.Provider>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
