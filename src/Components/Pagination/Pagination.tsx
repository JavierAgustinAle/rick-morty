import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect, useSelector } from 'react-redux';
import { getCharactersAction } from '../../Redux/Reducers/charsReducer';
import { getEpisodesAction } from '../../Redux/Reducers/episodesReducer';
import { getLocationsAction } from '../../Redux/Reducers/locationsReducer';


const Pagination = ({ title, getCharactersAction, getEpisodesAction,
    getLocationsAction }) => {

    const chars = useSelector((state: any) => state.characters);
    const eps = useSelector((state: any) => state.episodes);
    const locs = useSelector((state: any) => state.locations);

    const goToNextPage = (): boolean => {
        switch (title) {
            case 'episodes':
                getEpisodesAction()
                break;
            case 'characters':
                getCharactersAction()
                break;
            case 'locations':
                getLocationsAction()
                break;
            default:
                return false
        }
    }

    const goToPrevPage = (): boolean => {
        switch (title) {
            case 'episodes':
                getEpisodesAction(eps.prevPageEpisod)
                break;
            case 'characters':
                getCharactersAction(chars.prevPage)
                break;
            case 'locations':
                getLocationsAction(locs.prevPageLoca)
                break;
            default:
                return false
        }
    }

    if (title === 'episodes') {
        return (
            <nav className="pt-3">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${eps.prevPageEpisod === null ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPrevPage}
                        >Previous</button>
                    </li>
                    <li className="page-item disabled" >
                        <label className="page-link text-info">
                            {`${eps.nextPageEpisod != null ? eps.nextPageEpisod - 1 : eps.totalPagesEpisod} of ${eps.totalPagesEpisod}`}
                        </label>
                    </li>
                    <li className={`page-item ${eps.nextPageEpisod === null ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToNextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        )

    }
    if (title === 'characters') {
        return (
            <nav className="pt-3">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${chars.prevPage === null ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPrevPage}>Previous</button>
                    </li>
                    <li className="page-item disabled">
                        <label className="page-link text-info">
                            {`${chars.nextPage != null ? chars.nextPage - 1 : chars.totalPages} of ${chars.totalPages}`}
                        </label>
                    </li>
                    <li className={`page-item ${chars.nextPage === null ? "disabled" : ""}`}>
                        <button className="page-link"
                            onClick={goToNextPage}
                        >Next</button>
                    </li>
                </ul>
            </nav>
        )
    }
    if (title === 'locations') {
        return (
            <nav className="pt-3">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${locs.prevPageLoca === null ? "disabled" : ""}`}>
                        <button onClick={goToPrevPage} className="page-link">Previous</button>
                    </li>
                    <li className="page-item disabled" >
                        <label className="page-link text-info">
                            {`${locs.nextPageLoca != null ? locs.nextPageLoca - 1 : locs.totalPagesLoca} of ${locs.totalPagesLoca}`}
                        </label>
                    </li>
                    <li className={`page-item ${locs.nextPageLoca === null ? "disabled" : ""}`}>
                        <button className="page-link"
                            onClick={goToNextPage}
                        >Next</button>
                    </li>
                </ul>
            </nav>
        )
    }

}

function mapState(state: any) {
    return {}
}

Pagination.propTypes = {
    getCharactersAction: PropTypes.func.isRequired,
    getEpisodesAction: PropTypes.func.isRequired,
    getLocationsAction: PropTypes.func.isRequired

}

export default connect(mapState, { getCharactersAction, getEpisodesAction, getLocationsAction })(Pagination);