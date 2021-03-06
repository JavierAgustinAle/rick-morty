import React from 'react';
import PropTypes from 'prop-types';
// Components
import SearchBar from '../SearchBar/SearchBar';
import InfoCard from '../InfoCard/InfoCard';
import Pagination from '../Pagination/Pagination';
import NoData from '../NoData/NoData';

// Redux
import { connect } from 'react-redux';

const Episodes = ({ initial, filtered, error, search }): JSX.Element => {

    const title: string = "episodes"
    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite episode</h1>
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
                    search && !error ?
                        <span><small>{`Showing info for ${search}`}</small></span>
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
                error === false && filtered < 1
                    ?
                    <div className="pb-2">
                        <Pagination
                            title={title}
                        />
                    </div>
                    : null

            }
        </>
    )
}

function mapState(state: any) {
    return {
        initial: state.episodes.array,
        filtered: state.episodes.filteredEpi,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}

Episodes.propTypes = {
    initial: PropTypes.array.isRequired,
    filtered: PropTypes.array,
    error: PropTypes.bool,
    search: PropTypes.string
}

export default connect(mapState)(Episodes);