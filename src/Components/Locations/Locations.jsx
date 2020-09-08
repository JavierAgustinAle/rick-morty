import React from 'react'
import PropTypes from 'prop-types';
// Components
import SearchBar from '../SearchBar/SearchBar';
import InfoCard from '../InfoCard/InfoCard';
import Pagination from '../Pagination/Pagination';
import NoData from '../NoData/NoData';

// Redux
import { connect } from 'react-redux';

const Locations = ({ initial, filtered, error, search }) => {
    const title = "locations";
    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite location</h1>
            <div className="mx-auto col-8 col-sm-7 pt-3 pb-3">
                <SearchBar
                    title={title}
                />
                {
                    error ?
                        <div className="mx-auto"><NoData /></div>
                        : null
                }
                {
                    search ?
                        error ? null
                            : <span><small>{`Showing info for ${search}`}</small></span>
                        : null
                }
            </div>
            <br />
            <div className="row pl-2 pr-2 pb-3">
                {
                    error === false ?
                        filtered.length < 1
                            ?
                            initial.map(e => (
                                <InfoCard
                                    title={title}
                                    key={e.id}
                                    data={e}
                                />

                            ))
                            :
                            filtered.map(e => (
                                <InfoCard
                                    title={title}
                                    key={e.id}
                                    data={e}
                                />

                            ))
                        : null
                }
            </div>
            {
                error === false ?
                    filtered < 1 ?
                        <div className="pb-2">
                            <Pagination
                                title={title}
                            />
                        </div>
                        : null
                    : null
            }
        </>
    )
}
function mapState(state) {
    return {
        initial: state.locations.array,
        filtered: state.locations.filtered,
        error: state.locations.errorLoc,
        search: state.locations.searchLoc
    }
}

Locations.propTypes = {
    initial: PropTypes.array.isRequired,
    filtered: PropTypes.array,
    error: PropTypes.bool,
    search: PropTypes.string
}

export default connect(mapState)(Locations);