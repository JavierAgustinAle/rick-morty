import React from 'react';
import PropTypes from 'prop-types';
// Componets
import SearchBar from '../SearchBar/SearchBar';
import CharCard from '../CharCard/CharCard';
import Pagination from '../Pagination/Pagination';
import NoData from '../NoData/NoData';
// Redux
import { connect } from 'react-redux';


const Characters = ({ initial, filtered, error, search }) => {

    const title: string = 'characters';
    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite character</h1>
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
                    error === false
                        ? filtered.length < 1
                            ?
                            initial.map(e => (
                                <CharCard
                                    key={e.id}
                                    data={e}
                                />

                            ))
                            :
                            filtered.map(e => (
                                <CharCard
                                    key={e.id}
                                    data={e}
                                />

                            ))
                        : null
                }
            </div>
            {
                error === false && filtered < 1 ?
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


function mapState(state) {
    return {
        initial: state.characters.array,
        filtered: state.characters.filtered,
        error: state.characters.error,
        search: state.characters.search
    }
}

Characters.propTypes = {
    initial: PropTypes.array.isRequired,
    filtered: PropTypes.array,
    error: PropTypes.bool,
    search: PropTypes.string
}

export default connect(mapState)(Characters);