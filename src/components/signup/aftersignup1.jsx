import { colors } from '@mui/material'
import React from 'react'

function Aftersignup1() {
  return (
    <div className="container col-md-4 mt-5">
    <div >    
      <h1>Hello there!</h1>
      <h4>Almost done...</h4>
    </div>
<br />
    <h5>How do you want to use maestro app</h5>
  <form>
    <div class="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
        <div className="row">
            <div className="col-md-12 mb-1">
                 <input type="radio" className="btn-check" name='experties' id="btnradio1" autoComplete="off" />
                 <label className="btn btn-outline-danger w-100" htmlFor="btnradio1">
                     Maestro
                 </label>
            </div> 
            <br /><br /><br />
            <div className="col-md-12 mb-1">
                 <input type="radio" className="btn-check" name='experties' id="btnradio2" autoComplete="off" />
                 <label className="btn btn-outline-danger w-100" htmlFor="btnradio2">
                     Explorer
                 </label>
            </div> 
            <br /><br /><br />
          
                <input className='btn btn-primary' type="submit" value={"Next"} />
           
          </div>
         
    </div>
          
  </form>
</div>
  )
}

export default Aftersignup1