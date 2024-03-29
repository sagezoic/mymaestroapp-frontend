import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function ShareService() {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  const handleDelete = () => {
    // Perform delete action
    // ...
    setShowDeletePrompt(false);
  };

  return (
    <div><Link to='/maestro/dashboard/services'>
        <button className="btn btn-dark btn-custom">
            Back
        </button>
        </Link>
        <div className="container mt-5">
          <button
            className="btn btn-danger"
            onClick={() => setShowDeletePrompt(true)}
          >
            Share your service!
          </button>

        </div>
      </div>
  )
}

export default ShareService