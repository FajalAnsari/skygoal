import React from 'react';
import '../Specialist/Specialist.css';
// import {NavLink} from 'react-router-dom'

export default function Services(props) {
    return (
        <>
            <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                <div className="card shadow d-flex ">
                    <img src={props.imgsrc} class="card-img-top" alt="images" />
                    <div className="card-body">
                        <h5 class="card-text" id='profession'><span>{props.title}</span></h5>
                        <p className="card-title ">Rodney Stratton</p>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
