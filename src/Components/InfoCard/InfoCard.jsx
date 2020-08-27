import React from 'react';


const InfoCard = ({ data, title }) => {



    if (title === 'episodes') {
        return (<div className="mt-2 mb-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card text-white bg-secondary h-100" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h3 className="card-title text-center">{data.name}</h3>
                </div>
                <div className="card-footer">{data.episode}</div>
            </div>
        </div>)

    } else {
        return (
            < div className="mt-2 mb-2 col-lg-3 col-md-4 col-sm-6" >
                <div className="card text-white bg-secondary h-100" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h3 className="card-title text-center">{data.name}</h3>
                    </div>
                    <div className="card-footer">Dimension: {data.dimension}</div>
                </div>
            </div >
        )
    }
}

export default InfoCard