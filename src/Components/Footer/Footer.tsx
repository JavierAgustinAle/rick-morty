import React from 'react';
import moment from 'moment';

const Footer = (): JSX.Element => {

    const date: string = moment().format("MMM Do YYYY");



    return (
        <div className="pt-5">
            <div className="navbar navbar-dark fixed-bottom bg-dark">
                <p className="text-left text-white"><a className="text-white" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/javieragustinale/">JAVIER ALE</a></p>
                <p className="text-right text-white">{`Date: ${date}`}</p>
            </div>
        </div>
    )

}

export default Footer;