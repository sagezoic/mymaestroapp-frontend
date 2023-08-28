import React, { useState } from 'react';
import Carousel from './carousel';

function Home() {

  // const divStyle = {
  //   background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(40,50,20,1) 100%)",
  //   height: '100px', // Change this to your desired height
  //   // Add more styles here...
  // };

  // const headingStyle = {
  //   color: 'white', // Change this to your desired color
  // };

  return (
    <div className=' col-md-12' >
        {/* <div class="jumbotron col-md-12 mb-2" style={divStyle}>
          <h1 style={headingStyle}>
                Welcome to Maestromeetup
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut mollitia 
            doloremque quaerat minima suscipit expedita odio in sint a esse aliquam, nisi cumque odit eos dicta tenetur. Temporibus, minus esse?
          </p>
        </div> */}
        <div className='classHero h-80'>
          <Carousel/>
        </div>
    </div>
    
  )
}

export default Home