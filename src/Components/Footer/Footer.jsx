import React from 'react';
import '../Footer/Foooter.css';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
import img3 from '../../Images/img3.png';
import img4 from '../../Images/img4.png';
import img5 from '../../Images/img5.png';
import img6 from '../../Images/img6.png';

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-4">
                        <div className='pb-5'>
                            <h5>PT Dwidasa Samsara Indonesia
                            </h5>
                            <p>Ruko Jalur Sutera 29A No. 53
                                Alam Sutera Serpong, Tangerang 15323
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Contact
                        </h5>
                        <p>Phone : +62.21.5314.1135<br/>
                        Fax : +62.21.5314.1135<br/>
                        Email : community@dwidasa.com</p>
                    </div>
                    <div className="col-4 footerimg">
                        <img src={img1} alt="img1" />
                        <img src={img2} alt="img2" />
                        <img src={img3} alt="img3" />
                        <img src={img4} alt="img4" />
                        <img src={img5} alt="img5" />
                        <img src={img6} alt="img6" />
                    </div>
                </div>

            </div>
            <div className='Footer text-center'>
                <p className='pt-3 text-light'>CopyRight &copy;SkyGloal - 2022</p>
            </div>
        </>
    );
}

export default Footer;
