import React from 'react';
import '../Services/Services.css';
// import {NavLink} from 'react-router-dom'

export default function Services(props) {
    return (
        <>
            <div className='col-4 col-md-4 ps-5'>
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="images" />
                    <div className="card-body">
                        <h5 class="card-title font-weight-bold"><span>{props.title}</span></h5>
                        <p className="card-text">SOur product is made on the base of our
                            team’s careful research and analyses,
                            ranging from internet based
                            application.</p>
                        <a href='/' className="btn button">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
}
