import React from 'react';

function LogInPage() {

    function alertSignin() {
        alert("Log in Succesful")
    }

  return <div className='container'>
      <form onSubmit={alertSignin}>
      <div className='form-group'>
      <label>
          Username:
          <input 
          type="text"
          name="username" 
          class="form-control" /> 
      </label>
      </div>
      <div className='form-group'>
      <label>
          Password:
          <input 
          type="password"
          name="password_digest" 
          class="form-control" /> 
      </label>
      </div> 
      <br></br>
      <div className='form-group'>
          <button type="submit" class="btn btn-secondary btn-lg">Sign in</button>
      </div>
      </form>
  </div>;
}

export default LogInPage;
