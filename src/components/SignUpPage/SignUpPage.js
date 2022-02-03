import React, {useState, useContext} from 'react';
import { InventoryContext } from '../InventoryContext';
import './SignUpPage.css'



export default function SignUpPage() {
   const {addDealer} = useContext(InventoryContext)
   const [formState, setFormState] = useState({
    username: "",
    email: "",
    name: "",
    password_digest: "",
    phone_number: "",
    address: "",
    city:"",
    state:"",
    zipcode:"",
    logoimg:"",
   })

   function handleNewDealer (event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
        ...formState,
        [fieldName]: userInput
    })
}

function handleSubmit(event) {
   
    addDealer(formState)
    alert("Sign up Succesful")
    }

    
   

  return <div class="container" >
      <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
      <div class="form-row">
          <div className='form-group'>
      <label>
                    Username:
                    <input 
                    name="username" 
                    class="form-control" 
                    type="text" 
                    value={formState.username} 
                    onChange={handleNewDealer}
                    />
                </label> 
                </div>
                <div className='form-group'>
                <label>
                    Email:
                    <input 
                    name="email" 
                    class="form-control" 
                    type="text" 
                    value={formState.email} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                    Name:
                    <input 
                    name="name" 
                    class="form-control" 
                    type="text" 
                    value={formState.name} 
                    onChange={handleNewDealer}
                    />
                </label> 
                </div> 
                <div className='form-group'>
                <label>
                    Password:
                    <input 
                    name="password_digest" 
                    class="form-control" 
                    type="password" 
                    value={formState.password_digest} 
                    onChange={handleNewDealer}
                    />
                </label> 
                </div>  
                <div className='form-group'>
                <label>
                    Phone Number:
                    <input 
                    name="phone_number" 
                    class="form-control" 
                    type="text" 
                    value={formState.phone_number} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                Address:
                    <input 
                    name="address" 
                    class="form-control" 
                    type="text" 
                    value={formState.address} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                City:
                    <input 
                    name="city" 
                    class="form-control" 
                    type="text" 
                    value={formState.city} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                State:
                    <input 
                    name="state" 
                    class="form-control" 
                    type="text" 
                    value={formState.state} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                Zipcode:
                    <input 
                    name="zipcode" 
                    class="form-control" 
                    type="text" 
                    value={formState.zipcode} 
                    onChange={handleNewDealer}
                    />
                </label>
                </div>
                <div className='form-group'>
                <label>
                Image:
                    <input 
                        name="logoimg" 
                        class="form-control" 
                        type="text" 
                        value={formState.logoimg} 
                        onChange={handleNewDealer}
                        />
                </label>
                </div>
                <br></br>
              
                <button type="submit"  class="btn btn-secondary btn-lg" >Sign Up</button>     
                
             </div>   
      </form>
  </div>;
}
