import React from 'react';
import '../Section/Section.css';
import Section_img from '../../Images/Section_img.svg';

function Section() {
  return (
    <>
      <section className='Sec-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p=0'>
              <div className='sec-left'>
                <img claaName="img-fluid" src={Section_img} alt="Section_img" />
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0'>
              <div className='sec-right'>
                <h1>Welcome to <span>Dwidasa Samsara
                  Indonesia (DSI)</span></h1>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.</p>

                <p>
                  Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
