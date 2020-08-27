import React from 'react';

// Redux
import { connect } from 'react-redux';
import { getCharFiltersAction } from '../../Redux/charsDuck';
import { getEpisodesFiltersAction } from '../../Redux/episodesDuck';
import { getLocationsFiltersAction } from '../../Redux/locationsDuck';

const SearchBar = ({ title,
    getCharFiltersAction, getEpisodesFiltersAction,
    getLocationsFiltersAction }) => {

    function searchInfo(e) {

        let target = e.target.value
        if (target.length > 0)
            target = target[0].toUpperCase() + target.slice(1);

        if (target.length > 2) {
            if (title === 'characters') {

                //Filter by type
                //getCharFiltersAction('', target);

                //Filter by name
                getCharFiltersAction(target, '');
            }
            if (title === 'episodes') {
                getEpisodesFiltersAction(target);
            }
            if (title === 'locations') {
                //Filter by type
                //getLocationsFiltersAction('', target);

                //Filter by name
                getLocationsFiltersAction(target, '');
            }
        }
    }

    return (
        <>
            <div>
                {
                    title === 'episodes'
                        ? <input className="form-control"
                            type="text"
                            placeholder={`Search ${title} name`}
                            aria-label="Search"
                            onChange={searchInfo}
                            onKeyPress={(e) => { if (e.keyCode === 13) return false }}
                        />
                        : <input className="form-control"
                            type="text"
                            placeholder={`Search ${title} name or type`}
                            aria-label="Search"
                            onChange={searchInfo}
                            onKeyPress={(e) => { if (e.keyCode === 13) return false }}
                        />
                }
            </div>
        </>
    )

}

// Entrega todo lo que tenga el store
function mapState(state) {
    return {}
}

export default connect(mapState, { getCharFiltersAction, getEpisodesFiltersAction, getLocationsFiltersAction })(SearchBar);