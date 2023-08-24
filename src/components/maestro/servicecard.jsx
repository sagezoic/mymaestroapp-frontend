import React from 'react'
import { Link } from 'react-router-dom'
import DeletePrompt from './deletePrompt';

function ServiceCard({List, handleDelete}) {

    const serviceType = (servicetype)=>{
        if(servicetype=='ONETOONECALL')
            return '1:1 Call';
        else if(servicetype=='PRIORITYDM')
            return 'Priority DM';
        else
            return 'Online Session';
    }

  return (
    <div className='col'>
        <div className="card border-dark text-dark bg-ligth mt-4 ms-4" style={{width: "25rem", marginRight: "10px", marginBottom: "10px"}}>
            <div className="card-header text-dark"><h3 className="card-title fs-3">{List.serviceTitle}</h3></div>
            <div className="card-body">
                <div className='d-flex justify-contents-center'>
                    <div className='ms-auto '>
                        <i className='bi bi-eye me-2'></i>
                        <span>{serviceType(List.servicetype)}</span>
                    </div>
                </div>
                <div className="">
                    <span>{List.timePeriod} mins | </span><span>₹{List.priceToken}</span>
                </div>
                <p className="card-text mt-1">{List.description}</p>
                <div className='d-flex'>
                    <Link to='/maestro/dashboard/shareservice'><i className='btn btn-light bi bi-share me-4' style={{fontSize:"25px", cursor:"pointer"}}></i></Link>
                    <Link to={'/maestro/dashboard/editservice/?id='+List.id}>
                        <button className="btn btn-flat btn-block btn-primary" style={{marginTop:"10"}}>
                            Edit
                        </button>
                    </Link>
                    <div className='ms-auto'>
                        <i className='btn btn-light bi bi-activity me-2 fs-3'></i>
                    </div>
                    <DeletePrompt onDelete={() => handleDelete(List.id)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard