import React from 'react';
import { Switch, Route} from  "react-router-dom";
import Dealers from './components/Dealers';
import Footer from './components/Footer';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
     <Route exact path="/">
       <Home/>
       </Route>
       <Route exact path="/inventory">
         <Inventory/>
       </Route>
       <Route exact path="/dealers">
         <Dealers/>
       </Route>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
