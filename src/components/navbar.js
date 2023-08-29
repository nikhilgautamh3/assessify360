import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import logo from ".../public/images/logo88.png";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light my-bg-color ">
  <a className="navbar-brand" href="#">
    <img src ="/images/logo88.png" alt ="logo" /> 
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/"><p class="font-weight-bold">Home</p><span className="sr-only" >(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/test_portal"><p class="font-weight-bold">Test Portal</p></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_portal"><p class="font-weight-bold">Admin Portal</p></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/help"><p class="font-weight-bold">Help</p></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about"><p class="font-weight-bold">About</p></a>
      </li>
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar