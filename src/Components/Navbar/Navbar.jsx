import React from 'react';
import { useState } from 'react';

export default function Navbar() {
  const [show , setShow] = useState(false);
  return (
    <>
      <div className='nav-div  border-bottom'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active p-3" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active p-3" aria-current="page" href="/">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active p-3" aria-current="page" href="/">Technology</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active p-3" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Client
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Link - 1</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle p-3" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active p-3" aria-current="page" href="/">Partner</a>
                </li>
              </ul>
              <form class="d-flex ms-auto">
              <i className="bi bi-house-door p-2"></i>
              <i className="bi bi-envelope p-2"></i>
              <i className="bi bi-shuffle p-2"></i>
              </form>
            </div>
          </div>
        </nav>
      </div>
      </div>
    </>
  );
}
