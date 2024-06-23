import React, { useState } from 'react'
import './Navbar.css';

export default function Navbar() {

  const[signin, setSignin] = useState(true);
  const[loggedin, setLoggedin] = useState(false);

  const handleSignin = ()=>{
    setSignin(!signin);
  }

  const handlelogin = () =>{
    setLoggedin(!loggedin);
  }

  return (
    <>
    <div className="custom-nav d-lg-flex d-none">
        <a className="navbar-brand" href="#"><img src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg" alt="error" /></a>
        <div className="d-flex search">
            <button className="btn custom-search" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            <input className="form-control me-2 search-btn" type="search" aria-label="Search" placeholder="Search for your favorite groups in ATG"/>
        </div>
        <div className="d-flex align-items-center">
            {!loggedin ? <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn acc-btn-top fw-bold'>Create account.<span className='text-primary fw-bold'> It's free</span></button> :
            <div className="acc mt-3 d-flex align-items-end justify-content-between"> 
            <div className="account d-flex align-items-end">
              <img width="36" height="36" className='rounded-circle mb-2' src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjKCnjPcFg1HH~hdRR11kTiMj~Kjl6MTH3a2ErcsPp5tYPnlGWTTg251zbytSxPVYTC9SintIDgXfp8R4dmYoj5-bgsUjWUbSBrZg73DbJcV21ja5yZf5KIvDdeMgzhmAJrW4JhZydkUisP71LXPqux7JaSWCKkL-8Dl3PO6wcWloi5q8JPLP7B58P1zMBLXDG6YPsI9DKNqt3wvX~u~TBQSZohBijFJEbf8WTz~cA-aN1voGw~Bu6CTCGzmRe~btlT8xxAII-9BLDxf1Is7zthfUplTj26r4XfmMeAINFd-PybfNQybCBJ69WuPZ3Oeop7lRSc9L5kfcM8Txp-9ww__" alt="error" />
              <p className='acc-holder fw-bold'>Siddharth Goyal</p>
            </div>
            </div>
            }

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
                <div className="modal-content">
                  <div className="modal-header d-flex">
                    <p className="modal-title mx-auto" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                
                  <div className="modal-body d-flex flex-column">
                      <div className="acc-top d-flex container justify-content-between">
                        <h4 className='fw-bold'>{signin?'Create Account':'Sign In'}</h4>
                        <button className='btn' onClick={handleSignin}>
                        {signin?'Already have an account?':'Don’t have an account yet?'}
                        <span className='text-primary'> {signin? 'Sign In' : ' Create new for free!'}</span>
                        </button>
                      </div>
                  <div className="d-flex">
                    <div className="d-flex flex-column create-acc">
                     {signin && (<div className="row mt-3">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                      </div>)}
                      <div className="row mt-3">
                        <div className="col">
                          <input type="email" className="form-control" placeholder="Email" aria-label="Email"/>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <input type="password" className="form-control" placeholder="Password" aria-label="Password"/>
                        </div>
                      </div>
                      {signin && (<div className="row mt-3">
                        <div className="col">
                          <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Password"/>
                        </div>
                      </div>)}

                    <button className='btn btn-primary acc-btn mt-2' data-bs-dismiss="modal" aria-label="Close" onClick={handlelogin}>{signin?'Create Account':'Login'}</button>
                    <button className='btn mt-2'><img src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg" alt="facebook" /> Sign {signin?'up':'in'} with Facebook</button>
                    <button className='btn mt-2'><img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="google" /> Sign {signin?'up':'in'} with Google</button>
                    {!signin && (<button className='btn mt-3 fp'>Forgot password?</button>)}
                    </div>

                    <div className="login-img d-flex flex-column">
                      <img src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg" alt="login" />
                      <p className='log-bottom'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>

                  </div>
                </div>

                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>
    </div>
    </>
  )
}
