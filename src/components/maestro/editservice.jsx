import React from 'react'
import { Link } from 'react-router-dom'

function EditService() {
  return (
    <div><Link to='/maestro/dashboard/services'>
        <button class="btn btn-dark btn-custom">
            Back
        </button>
        </Link>
        <div>This is edit service page</div>
    </div>
  )
}

export default EditService