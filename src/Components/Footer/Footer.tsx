import React from 'react';
import moment from 'moment';
const Footer = () => {

    const date = moment().format("MMM Do YYYY");

    return (
        <div className="pt-5">
            <div className="navbar navbar-dark fixed-bottom bg-dark">
                <p className="text-left text-white">JAVIER ALE</p>
                <p className="text-right text-white">{`Date: ${date}`}</p>
            </div>
        </div>
    )
}

export default Footer;