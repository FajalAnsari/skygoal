import React from 'react';
import '../Specialist/Specialist.css';
import Cards from '../Specialist/Card';
import Sdata from '../Specialist/Spdata';
import Line from '../../Images/Line.png';

export default function Services() {
    return (
        <>
            <section className='services'>
                <div className='container '>
                    <div className='text-center pb-5'>
                        <h3>Mobile Specialist</h3>
                        <span><img src={Line} alt="lineimage" /></span>
                    </div>
                    <div className='row ps-5'>
                    {
                Sdata.map((val, ind) =>  {
                  return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
                })
              }
                    </div>
                </div>
            </section>
        </>
    );
}
