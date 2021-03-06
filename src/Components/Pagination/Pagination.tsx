import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getCharactersAction } from '../../Redux/Reducers/charsReducer';
import { getEpisodesAction } from '../../Redux/Reducers/episodesReducer';
import { getLocationsAction } from '../../Redux/Reducers/locationsReducer';


const Pagination = ({ title, charsTotal, episodTotal, locationTotal, charsNext, episodNext,
    locationNext, charsPrev, episodPrev, locationPrev, getCharactersAction, getEpisodesAction,
    getLocationsAction }) => {

    function goToNextPage(): boolean {
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

    function goToPrevPage(): boolean {
        switch (title) {
            case 'episodes':
                getEpisodesAction(episodPrev)
                break;
            case 'characters':
                getCharactersAction(charsPrev)
                break;
            case 'locations':
                getLocationsAction(locationPrev)
                break;
            default:
                return false
        }
    }

    if (title === 'episodes') {
        return (
            <nav className="pt-3">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${episodPrev === null ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPrevPage}
                        >Previous</button>
                    </li>
                    <li className="page-item disabled" >
                        <label className="page-link text-info">
                            {`${episodNext != null ? episodNext - 1 : episodTotal} of ${episodTotal}`}
                        </label>
                    </li>
                    <li className={`page-item ${episodNext === null ? "disabled" : ""}`}>
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
                    <li className={`page-item ${charsPrev === null ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPrevPage}>Previous</button>
                    </li>
                    <li className="page-item disabled">
                        <label className="page-link text-info">
                            {`${charsNext != null ? charsNext - 1 : charsTotal} of ${charsTotal}`}
                        </label>
                    </li>
                    <li className={`page-item ${charsNext === null ? "disabled" : ""}`}>
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
                    <li className={`page-item ${locationPrev === null ? "disabled" : ""}`}>
                        <button onClick={goToPrevPage} className="page-link">Previous</button>
                    </li>
                    <li className="page-item disabled" >
                        <label className="page-link text-info">
                            {`${locationNext != null ? locationNext - 1 : locationTotal} of ${locationTotal}`}
                        </label>
                    </li>
                    <li className={`page-item ${locationNext === null ? "disabled" : ""}`}>
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
    return {
        charsTotal: state.characters.totalPages,
        episodTotal: state.episodes.totalPagesEpisod,
        locationTotal: state.locations.totalPagesLoca,

        charsNext: state.characters.nextPage,
        episodNext: state.episodes.nextPageEpisod,
        locationNext: state.locations.nextPageLoca,

        charsPrev: state.characters.prevPage,
        episodPrev: state.episodes.prevPageEpisod,
        locationPrev: state.locations.prevPageLoca,

    }
}

Pagination.propTypes = {
    charsTotal: PropTypes.number.isRequired,
    episodTotal: PropTypes.number.isRequired,
    locationTotal: PropTypes.number.isRequired,
    charsNext: PropTypes.number,
    episodNext: PropTypes.number,
    locationNext: PropTypes.number,
    charsPrev: PropTypes.number,
    episodPrev: PropTypes.number,
    locationPrev: PropTypes.number,
    getCharactersAction: PropTypes.func.isRequired,
    getEpisodesAction: PropTypes.func.isRequired,
    getLocationsAction: PropTypes.func.isRequired

}

export default connect(mapState, { getCharactersAction, getEpisodesAction, getLocationsAction })(Pagination);