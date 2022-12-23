import React from 'react';
import '../Services/Services.css';
import Cards from '../Services/Card';
import Sdata from './Sdata';

export default function Services() {
    return (
        <>
            <section className='services'>
                <div className='container m-5'>
                    <div className='text-center p-3'>
                        <h3>Product And Services</h3>
                    </div>
                    <div className='row'>
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
