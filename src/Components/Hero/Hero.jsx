import React from 'react';
import './Hero.css';
import hero_img from '../../Images/Hero_img.svg';

function Hero() {
  return (
    <>
      <section className='Hero-section'>
        <div className='container'>
          <div className='row p-5'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p=0'>
              <div className='left'>
                <h1>Making the most of the ever-growing <br />
                  <span>Information Technology</span></h1>
                  <p>
                  Managed by a team of professional experts with extensive experience and impressive track records
                  </p>
                  <button className='btn'>Read More</button>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0'>
              <div className='right'>
                <img claaName="img-fluid" src={hero_img} alt="Hero_img"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
