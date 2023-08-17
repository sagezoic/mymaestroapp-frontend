import React from 'react'

function Aftersignup3() {
  return (
    <div className="container col-md-4 mt-5">
        <div >    
          <h1>Hello there!</h1>
          <h4>Almost done...</h4>
        </div>
<br />
  <form>
        <div>
              <br />
              <h6>Select your experties</h6>
              
              <div class="btn-toolbar d-block" aria-label="Basic checkbox toggle button group">
                <div className="row">
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio1" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio1">
                      Civil
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio2"  autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio2">
                      Mechnical
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio3">
                     Automoblie
                    </label>
                  </div>
                  <br /><br /><br />
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio4" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio4">
                      Dancing
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio5" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio5">
                      Singing
                    </label>
                  </div>
                  <div className="col-md-4 mb-1">
                    <input type="radio" className="btn-check" name='experties' id="btnradio6" autoComplete="off" />
                    <label className="btn btn-outline-primary w-100" htmlFor="btnradio6">
                     Sports
                    </label>
                  </div>
                 <br /><br /><br />
                 <input type="submit" className='btn-custom-sq' />              
              </div>
              </div>
            </div>
  </form>

</div>
  )
}

export default Aftersignup3