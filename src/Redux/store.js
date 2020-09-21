import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import charsReducer, { getCharactersAction } from './Reducers/charsReducer';
import locationsReducer, { getLocationsAction } from './Reducers/locationsReducer';
import episodesReducer, { getEpisodesAction } from './Reducers/episodesReducer';

let rootReducer = combineReducers({
    characters: charsReducer,
    locations: locationsReducer,
    episodes: episodesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    getCharactersAction()(store.dispatch, store.getState)
    getLocationsAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)
    return store;
}

