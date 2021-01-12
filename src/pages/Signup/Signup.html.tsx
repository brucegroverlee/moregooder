import React from 'react';
import './authentication.css';
import register from './images/register.png';

export interface ISignupHtmlProps {}

export const SignupHtml: React.FunctionComponent<ISignupHtmlProps> = (props) => {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row">
        </div>
        <div className="content-body">
          <section className="row flexbox-container">
            <div className="col-xl-8 col-10">
              <div className="card bg-authentication mb-0">
                <div className="row m-0">
                  <div className="col-md-6 col-12 px-0">
                    <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                      <div className="card-header pb-1">
                        <div className="card-title">
                          <h4 className="text-center mb-2">Sign Up</h4>
                        </div>
                      </div>
                      <div className="text-center">
                        <p> <small> Please enter your details to sign up and be part of our great community</small>
                        </p>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <form>
                            <div className="form-row">
                              <div className="form-group col-md-6 mb-50">
                                <label htmlFor="inputfirstname4">first name</label>
                                <input type="text" className="form-control" id="inputfirstname4" placeholder="First name"/>
                              </div>
                              <div className="form-group col-md-6 mb-50">
                                <label htmlFor="inputlastname4">last name</label>
                                <input type="text" className="form-control" id="inputlastname4" placeholder="Last name"/>
                              </div>
                            </div>
                            <div className="form-group mb-50">
                              <label className="text-bold-600" htmlFor="exampleInputUsername1">username</label>
                              <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username"/></div>
                            <div className="form-group mb-50">
                              <label className="text-bold-600" htmlFor="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address"/></div>
                            <div className="form-group mb-2">
                              <label className="text-bold-600" htmlFor="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary glow position-relative w-100">SIGN UP<i id="icon-arrow" className="bx bx-right-arrow-alt"></i></button>
                          </form>
                          <hr/>
                          <div className="text-center"><small className="mr-25">Already have an account?</small><a href="auth-login.html"><small>Sign in</small> </a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                    <img className="img-fluid" src={register} alt="branding logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}