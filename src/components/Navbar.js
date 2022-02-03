import React from 'react';


function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div class="container">
        <a class="navbar-brand" href="/">Classic Cars Miami</a>
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navmenu"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="/inventory">Inventory</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/dealers">Dealers</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/login">Log in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar


