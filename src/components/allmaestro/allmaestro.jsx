import React from 'react'
import MaestroCard from './maestrocard'

function AllMaestro() {
  return (
    <div className="container">
        <div className="row container-fluid row-cols-1 row-cols-md-3">
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
      </div>
    </div>
  )
}

export default AllMaestro