import React, { useState } from 'react';
import Carousel from './carousel';

function Home() {
  return (
    <div className='container col-md-12' >
        <div class="jumbotron" style={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
          <h1>
                Maestro Homepage!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut mollitia 
            doloremque quaerat minima suscipit expedita odio in sint a esse aliquam, nisi cumque odit eos dicta tenetur. Temporibus, minus esse?
          </p>
        </div>
        <div className='classHero h-80'>
          <Carousel/>

        </div>
    </div>
  )
}

export default Home