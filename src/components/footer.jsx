import React, { Component } from 'react'

export class footer extends Component {
  render() {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">
          {/*<!-- Section: Social media -->*/}
          <section className="d-flex justify-content-center justify-content-md-center p-4 border-bottom">
          </section>
          {/*<!-- Section: Social media -->*/}

          <div className='mt-5 d-flex justify-content-center'>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div>

          {/*<!-- Section: Links  -->*/}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/*<!-- Grid row -->*/}
              <div className="row mt-3">
                {/*<!-- Grid column -->*/}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/*<!-- Content -->*/}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>MyMaestro
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/*<!-- Grid column -->*/}
        
                {/*<!-- Grid column -->*/}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/*<!-- Links -->*/}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Experts
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Writer</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Artist</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Traveller</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Singer</a>
                  </p>
                </div>
                {/*<!-- Grid column -->*/}
        
                {/*<!-- Grid column -->*/}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/*<!-- Links -->*/}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">About Us</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Services</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                {/*<!-- Grid column -->*/}
        
                {/*<!-- Grid column -->*/}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/*<!-- Links -->*/}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> Karad, Maharashtra 415110, India</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    maestromeetup@gmail.com
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                </div>
                {/*<!-- Grid column -->*/}
              </div>
              {/*<!-- Grid row -->*/}
            </div>
          </section>
          {/*<!-- Section: Links  -->*/}
        
          {/*<!-- Copyright -->*/}
          <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
            © 2023 Copyright:&nbsp;&nbsp;
            <a className="text-reset fw-bold" href="/">MyMaestro.com</a>
          </div>
          {/*<!-- Copyright -->*/}
        </footer>
    )
  }
}

export default footer