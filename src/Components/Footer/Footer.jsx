import React from 'react';

const Footer = () => {

    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    today = dd + '/' + mm + '/' + yyyy;

    return (
        <div className="navbar navbar-dark sticky-bottom bg-dark">
            <p className="text-left text-white">JAVIER ALE</p>
            <p className="text-right text-white">{`Date: ${today}`}</p>
        </div>
    )
}

export default Footer;