import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getCharFiltersAction, removeSearchCharAction } from '../../Redux/charsDuck';
import { getEpisodesFiltersAction, removeSearchEpisodeAction } from '../../Redux/episodesDuck';
import { getLocationsFiltersAction, removeSearchLocationsAction } from '../../Redux/locationsDuck';

const SearchBar = ({ title,
    getCharFiltersAction, getEpisodesFiltersAction,
    getLocationsFiltersAction, removeSearchCharAction,
    removeSearchEpisodeAction, removeSearchLocationsAction }) => {

    function searchInfo(e) {

        let target = e.target.value
        if (target.length > 0)
            target = target[0].toUpperCase() + target.slice(1);

        if (target.length > 2) {
            if (title === 'characters') {
                let search = document.getElementById('searchType').value
                search === 'name' ?
                    //Filter by name
                    getCharFiltersAction(target, '')
                    :
                    //Filter by type
                    getCharFiltersAction('', target);


            }
            if (title === 'episodes') {
                getEpisodesFiltersAction(target);
            }
            if (title === 'locations') {
                let search = document.getElementById('searchType').value
                search === 'name' ?
                    //Filter by name
                    getLocationsFiltersAction(target, '')
                    :
                    //Filter by type
                    getLocationsFiltersAction('', target);


            }
        }
    }

    function clearSearch() {
        if (title === 'characters') {
            removeSearchCharAction();
            document.getElementById('input').value = '';
        }
        if (title === 'episodes') {
            removeSearchEpisodeAction();
            document.getElementById('input-episodes').value = '';
        }
        if (title === 'locations') {
            removeSearchLocationsAction();
            document.getElementById('input').value = '';
        }
    }

    return (
        <>
            <div className="pb-2">

                {
                    title === 'episodes'
                        ?
                        <input className="form-control"
                            type="text"
                            placeholder={`Search ${title} name`}
                            aria-label="Search"
                            onChange={searchInfo}
                            onKeyPress={(e) => { if (e.keyCode === 13) return false }}
                            id="input-episodes"
                        />
                        :
                        <>
                            <select onChange={clearSearch} className="custom-select col-lg-4 col-md-4 col-sm-5 pb-2" id="searchType">
                                <option value="name">Name</option>
                                <option value="type">Type</option>
                            </select>
                            <input className="form-control pt-2"
                                type="text"
                                placeholder={`Search ${title}`}
                                aria-label="Search"
                                onChange={searchInfo}
                                onKeyPress={(e) => { if (e.keyCode === 13) return false }}
                                id="input"
                            />
                        </>
                }
                <button className="btn btn-sm float-right" onClick={clearSearch}>Clear Search</button>
            </div>
        </>
    )

}

// Entrega todo lo que tenga el store
function mapState(state) {
    return {}
}

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,

    getCharFiltersAction: PropTypes.func.isRequired,
    getEpisodesFiltersAction: PropTypes.func.isRequired,
    getLocationsFiltersAction: PropTypes.func.isRequired,
    removeSearchCharAction: PropTypes.func.isRequired,
    removeSearchEpisodeAction: PropTypes.func.isRequired,
    removeSearchLocationsAction: PropTypes.func.isRequired

}

export default connect(mapState, {
    getCharFiltersAction,
    getEpisodesFiltersAction,
    getLocationsFiltersAction,
    removeSearchCharAction,
    removeSearchEpisodeAction,
    removeSearchLocationsAction
})(SearchBar);