import React from 'react'
import {Link} from 'react-router-dom';

function Addservice() {
  return (
    <div>
      <Link to='/maestro/dashboard/services'>
        <button class="btn btn-dark btn-custom">
            Back
        </button>
      </Link>
      <div>Addservice</div>
    </div>
  )
}

export default Addservice