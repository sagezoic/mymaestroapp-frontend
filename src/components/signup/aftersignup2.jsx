import React from 'react'

function Aftersignup2() {
  return (
   <div className='container col-md-4 mt-5'> 
   
    <div >    
      <h1>Hello there!</h1>
      <h4>Almost done...</h4>
    </div>
<br />
  <form>
      <div className='row'>
              <div className="col-md-6 mb-1">
                    <h6>First Name</h6>
                    <input type="text" required />
              </div>
                  <br />
              <div className="col-md-6 mb-1">
                    <h6>Last Name</h6>
                    <input type="text" required  />
              </div>
                  <br />
              <div className="col-md-6 mb-1">
                    <h6>Date of Birth</h6>
                    <input type="date" required  />
              </div>
                  <br />
             
              <div class="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio1" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio1">
                      1:1 Session 
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio2"  autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio2">
                      Group Session
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio3">
                     Q & A
                    </label>
                  </div>
                 <br /><br />
                <input type="submit" className='btn-custom-sq' />
              
              </div>   
                               
          </div>
         
  </form>
  </div>

  )
}

export default Aftersignup2