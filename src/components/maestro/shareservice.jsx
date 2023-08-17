import React from 'react'
import { Link } from 'react-router-dom'

function ShareService() {
  return (
    <div><Link to='/maestro/dashboard/services'>
        <button class="btn btn-dark btn-custom">
            Back
        </button>
        </Link>
        <div>This is share service page</div>
    </div>
  )
}

export default ShareService