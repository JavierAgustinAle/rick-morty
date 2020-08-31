import ApolloClient, { gql } from "apollo-boost";

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = 'GET_LOCATIONS';
let GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
let GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR';

let GET_LOCATIONS_FILTERS = 'GET_LOCATIONS_FILTERS';
let GET_LOCATIONS_FILTERS_ERROR = 'GET_LOCATIONS_FILTERS_ERROR';
let GET_LOCATIONS_FILTERS_SUCCESS = 'GET_LOCATIONS_FILTERS_SUCCESS';

let REMOVE_FILTERED = 'REMOVE_FILTERED';

let UPDATE_PAGE_LOCATIONS = 'UPDATE_PAGE_LOCATIONS';

let initialData = {
    fetching: false,
    array: [],
    filtered: [],
    nextPageLoca: 1,
    prevPageLoca: 0,
    totalPagesLoca: 0,
    errorLoc: false
}

// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_LOCATIONS:
            return { ...state, fetching: true }
        case GET_LOCATIONS_ERROR:
            return { ...state, fetching: false, errorLoc: action.payload }
        case GET_LOCATIONS_SUCCESS:
            return { ...state, array: action.payload, fetching: false, errorLoc: false }
        case GET_LOCATIONS_FILTERS:
            return { ...state, fetching: true }
        case GET_LOCATIONS_FILTERS_ERROR:
            return { ...state, fetching: false, errorLoc: action.payload }
        case GET_LOCATIONS_FILTERS_SUCCESS:
            return { ...state, filtered: action.payload, fetching: false, errorLoc: false }
        case REMOVE_FILTERED:
            return { ...state, filtered: action.payload, errorLoc: false }
        case UPDATE_PAGE_LOCATIONS:
            return {
                ...state, nextPageLoca: action.payload.nextLoc,
                prevPageLoca: action.payload.prevLoc, totalPagesLoca: action.payload.totalLoc
            }
        default:
            return state
    }
}


//Actions Creators
export let getLocationsFiltersAction = (searchName, searchType) => (dispatch, getState) => {
    let query = gql`
    query ($name: String, $type: String) {
        locations( filter: { name: $name, type: $type }) {
            results{
              id
              name
              dimension
              type
              residents{
                id
                name
                image
              }
            }
          }
      }
    `
    dispatch({
        type: GET_LOCATIONS_FILTERS
    })

    return client.query({
        query,
        variables: { name: searchName, type: searchType }
    }).then(({ data }) => {
        for (let i = 0; i < data.locations.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.locations.results[i].residents.splice(5, data.locations.results[i].residents.length);
            }
        }

        dispatch({
            type: GET_LOCATIONS_FILTERS_SUCCESS,
            payload: data.locations.results

        })
    }).catch((errors) => {
        dispatch({
            type: GET_LOCATIONS_FILTERS_ERROR,
            payload: true
        })
        return
    })
}

export let removeSearchLocationsAction = () => (dispatch, getState) => {
    let filtered = [];

    dispatch({
        type: REMOVE_FILTERED,
        payload: filtered
    })
}

export let getLocationsAction = (direction) => (dispatch, getState) => {
    let query = gql`
        query ($page: Int){
            locations(page: $page){
            info{
                pages
                next
                prev
            }
            results{
                id
                name
                type
                dimension
                residents{
                id
                name
                image
                }
            }
            }
        }
    `
    dispatch({
        type: GET_LOCATIONS
    })

    let pageToGo;
    if (direction !== undefined) {
        let { prevPageLoca } = getState().locations
        pageToGo = prevPageLoca;
    } else {
        let { nextPageLoca } = getState().locations
        pageToGo = nextPageLoca;
    }

    return client.query({
        query,
        variables: { page: pageToGo }
    }).then(({ data, error }) => {
        for (let i = 0; i < data.locations.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.locations.results[i].residents.splice(5, data.locations.results[i].residents.length);
            }
        }

        dispatch({
            type: GET_LOCATIONS_SUCCESS,
            payload: data.locations.results
        })
        dispatch({
            type: UPDATE_PAGE_LOCATIONS,
            payload: {
                nextLoc: data.locations.info.next ? data.locations.info.next : null,
                prevLoc: data.locations.info.prev ? data.locations.info.prev : null,
                totalLoc: data.locations.info.pages
            }
        })

    }).catch((errors) => {
        dispatch({
            type: GET_LOCATIONS_ERROR,
            payload: true
        })
        return
    })

}