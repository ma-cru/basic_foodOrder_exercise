import React from 'react';

import Bestellungscontainer from './Bestellungscontainer';

import './Hintergrund_css.css';

const Hintergrund = props => {

    return (
        <div className='backdrop'>
            <div className="bannerImg">
                <span></span><span className='overlay'>Healthy takeaways made with the very best ingredients money can buy</span><span></span>
            </div>
            <div className='innerBackdrop'>
                <Bestellungscontainer className="bestellungsContainer" />
            </div>
            <p className='bannerCredits'><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/132113583@N03/24166255505">Banner image courtesy of photomanm, CC BY-SA 2.0.</a></p>
        </div>

    );

}

export default Hintergrund;