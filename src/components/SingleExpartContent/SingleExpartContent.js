import React from 'react';
import { Link } from 'react-router-dom';

const SingleExpartContent = ({image}) => {
    return (
        <>
            <div className="expart__tab-content white-bg">
                <div className="expart__thumb" style={{ background: `url(assets/img/expart/expart-${image}.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-6">
                        <div className="expart__content">
                            <h3>Our experts will <br /> guide you</h3>
                            <p>Tosser me old mucker lurgy cheeky bugger young delinquent squiffy at public school lost the plot fanny around, haggle daft my lady faff about old pear.</p>
                            <Link to="/about" className="z-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleExpartContent;