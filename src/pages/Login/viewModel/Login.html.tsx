import React from 'react';
import { Link } from 'react-router-dom';
import './authentication.css';
import loginPng from './images/login.png';

export interface ILoginHtmlProps {
  loading: boolean;
  errorMessage: string;
  emailField: string;
  setEmailField(value: string): void;
  passwordField: string;
  setPasswordField(value: string): void;
  loginWithGoogleHandle(): void;
  loginWithFacebookHandle(): void;
  loginWithEmailHandle(form: { email: string; password: string}): void;
}

export const LoginHtml: React.FunctionComponent<ILoginHtmlProps> = (props) => {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row">
        </div>
        <div className="content-body">
          {/*<!-- login page start -->*/}
          <section id="auth-login" className="row flexbox-container">
            <div className="col-xl-8 col-11">
              <div className="card bg-authentication mb-0">
                <div className="row m-0">
                  {/*<!-- left section-login -->*/}
                  <div className="col-md-6 col-12 px-0">
                    <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                      <div className="card-header pb-1">
                        <div className="card-title">
                          <h4 className="text-center mb-2">Welcome Back</h4>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <div className="d-flex flex-md-row flex-column justify-content-around">
                            <button
                              className="btn btn-social btn-google btn-block font-small-3 mr-md-1 mb-md-0 mb-1"
                              onClick={props.loginWithGoogleHandle}
                              disabled={props.loading}
                              >
                              <i className="bx bxl-google font-medium-3"></i><span className="pl-50 d-block text-center">Google</span>
                            </button>
                            <button
                              className="btn btn-social btn-block mt-0 btn-facebook font-small-3"
                              onClick={props.loginWithFacebookHandle}
                              disabled={props.loading}
                              >
                              <i className="bx bxl-facebook-square font-medium-3"></i><span className="pl-50 d-block text-center">Facebook</span>
                            </button>
                          </div>
                          <div className="divider">
                            <div className="divider-text text-uppercase text-muted"><small>or login with
                                    email</small>
                            </div>
                          </div>
                          <form>
                            <div className="form-group mb-50">
                              <label className="text-bold-600" htmlFor="exampleInputEmail1">Email address</label>
                              <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Email address"
                                value={props.emailField}
                                onChange={(event) => props.setEmailField(event.target.value)}
                                disabled={props.loading}/>
                            </div>
                            <div className="form-group">
                              <label className="text-bold-600" htmlFor="exampleInputPassword1">Password</label>
                              <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password" 
                                value={props.passwordField}
                                onChange={(event) => props.setPasswordField(event.target.value)}
                                disabled={props.loading}/>
                            </div>

                            { (props.errorMessage === '') ? (<React.Fragment/>) : (
                              <div className="alert alert-danger mb-2" role="alert">
                                {props.errorMessage}
                              </div>
                            )}

                            <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                              <div className="text-left">
                                
                                {/**
                                <div className="checkbox checkbox-sm">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                  <label className="checkboxsmall" htmlFor="exampleCheck1"><small>Keep me logged
                                          in</small></label>
                                </div>
                                */}
                                
                              </div>
                              <div className="text-right">
                                <Link to="/forgot-password" className="card-link">
                                  <small>Forgot Password?</small>
                                </Link>
                              </div>
                            </div>
                            <button
                              className="btn btn-primary glow w-100 position-relative"
                              onClick={() => props.loginWithEmailHandle({ email: props.emailField, password: props.passwordField, })}
                              disabled={props.loading}
                            >
                              Login
                              <i id="icon-arrow" className="bx bx-right-arrow-alt"></i>
                            </button>
                          </form>

                          <hr/>

                          <div className="text-center">
                            <small className="mr-25">Don't have an account?</small>
                            <Link to="/signup"><small>Sign up</small></Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- right section image -->*/}
                  <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                    <div className="card-content">
                      <img className="img-fluid" src={loginPng} alt="branding logo"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<!-- login page ends -->*/}

        </div>
      </div>
    </div>
  )
}