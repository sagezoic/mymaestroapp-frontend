import React from 'react'

function Otp() {
    

  return (
    <div className="container mt-5">
        
            <h1>Hello there!</h1>
            <h4>Almost done...</h4>
        
        <br />

        <form>
            <div>
                <div>
                    <h6>Email OTP</h6>
                    <input type="text" required />
                </div>
                <br /><br />
                <div>
                    <h6>Mobile OTP</h6>
                    <input type="text" required  />
                </div>
                <br />
                 
                <input type="submit" className='btn-custom-sq' />
                 <a class="btn btn-primary" href="/signup/aftersignup1" role="button">Submit</a>
                               
            </div>
        </form>
    </div>
  )
}

export default Otp