import React from 'react'

function Home() {
    return (
        <div>
        <section class="bg p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1><span class="">Classic Cars Miami</span></h1>
                    <p class="lead my-4">
                    29,975 Classic Cars and Trucks for Sale Today
                    </p>
                    <button class="btn btn-secondary btn-md">Contact</button>
                </div>
                <img class="img-fluid w-60 d-none d-sm-block" alt="" src='https://www.zilliondesigns.com/images/portfolio/auto-dealer/auto-dealer-02.png'></img>
            </div>
        </div>
    </section>

    
<section class="bg-dark text-light p-5">
<div class="container">
    <div class="d-md-flex justify-content-between align-items-center">
        <h3 class="md-3 mb-md-0">Sign Up For Our Newsletter</h3>

        <div class="input-group news-input">
            <input 
            type="text" 
            class="form-control" 
            placeholder="Enter Email" 
            />

            <button 
            class="btn btn-secondary btn-lg" 
            type="button"
            >
            Button
            </button>
          </div>
    </div>
    </div>
    </section>
    </div>
    )
}

export default Home
