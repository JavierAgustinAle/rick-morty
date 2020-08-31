import React from 'react';
import PropTypes from 'prop-types';
// Components
import SearchBar from '../SearchBar/SearchBar';
import InfoCard from '../InfoCard/InfoCard';
import Pagination from '../Pagination/Pagination';
// Redux
import { connect } from 'react-redux';

const Episodes = ({ initial, filtered }) => {
    const title = "episodes"
    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite episode</h1>
            <div className="mx-auto col-8 col-sm-7 pt-3 pb-3">
                <SearchBar
                    title={title}
                />
            </div>
            <br />
            <div className="row pl-2 pr-2">
                {
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
                }
            </div>
            {
                filtered < 1 ?
                    <Pagination
                        title={title}
                    />
                    : ''
            }
        </>
    )
}

function mapState(state) {
    return {
        initial: state.episodes.array,
        filtered: state.episodes.filtered
    }
}

Episodes.propTypes = {
    initial: PropTypes.array.isRequired,
    filtered: PropTypes.array
}

export default connect(mapState)(Episodes);