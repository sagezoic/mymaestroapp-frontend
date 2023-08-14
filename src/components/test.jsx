import React from 'react';

function Test() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Content for the left column */}
          <div className="bg-primary p-4">
            Left Column
          </div>
        </div>
        <div className="col-md-6">
          {/* Content for the right column */}
          <div className="bg-secondary p-4">
            Right Column
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
