import ApolloClient, { gql } from "apollo-boost";

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_EPISODES = 'GET_EPISODES';
let GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS';
let GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';

let GET_FILTERS_EPISODES = 'GET_FILTERS_EPISODES';
let GET_FILTERS_EPISODES_ERROR = 'GET_FILTERS_EPISODES_ERROR';
let GET_FILTERS_EPISODES_SUCCESS = 'GET_FILTERS_EPISODES_SUCCESS';

let REMOVE_FILTERED = 'REMOVE_FILTERED';

let UPDATE_PAGE_EPISODE = 'UPDATE_PAGE_EPISODE';

let initialData = {
    fetching: false,
    array: [],
    filtered: [],
    nextPageEpisod: 1,
    prevPageEpisod: 0,
    totalPagesEpisod: 0
}


// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_EPISODES:
            return { ...state, fetching: true }
        case GET_EPISODES_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_EPISODES_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        case GET_FILTERS_EPISODES:
            return { ...state, fetching: true }
        case GET_FILTERS_EPISODES_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_FILTERS_EPISODES_SUCCESS:
            return { ...state, filtered: action.payload, fetching: false }
        case REMOVE_FILTERED:
            return { ...state, filtered: action.payload }
        case UPDATE_PAGE_EPISODE:
            return {
                ...state, nextPageEpisod: action.payload.next,
                prevPageEpisod: action.payload.prev, totalPagesEpisod: action.payload.total
            }
        default:
            return state
    }
}

//Actions Creators

export let getEpisodesFiltersAction = (searchName) => (dispatch, getState) => {
    let query = gql`
    query ($name: String) {
        episodes( filter: { name: $name }) {
            results{
              id
              name
              episode
              air_date
              characters{
                id
                name
              }
            }
          }
      }
    `
    dispatch({
        type: GET_FILTERS_EPISODES
    })

    return client.query({
        query,
        variables: { name: searchName }
    }).then(({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_FILTERS_EPISODES_ERROR,
                payload: error.data
            })
            return
        }
        for (let i = 0; i < data.episodes.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.episodes.results[i].characters.splice(5, data.episodes.results[i].characters.length);
            }
        }
        dispatch({
            type: GET_FILTERS_EPISODES_SUCCESS,
            payload: data.episodes.results

        })
    })

}

export let removeSearchEpisodeAction = () => (dispatch, getState) => {
    let filtered = [];

    dispatch({
        type: REMOVE_FILTERED,
        payload: filtered
    })
}

export let getEpisodesAction = (direction) => (dispatch, getState) => {
    let query = gql`
    query ($page: Int){
        episodes(page: $page){
          info{
            pages
            next
            prev
          }
          results{
            id
            name
            episode
            air_date
            characters{
               id
               name
            }
          }
        }
      }
    `
    dispatch({
        type: GET_EPISODES
    })
    let pageToGo;
    if (direction !== undefined) {
        let { prevPageEpisod } = getState().episodes
        pageToGo = prevPageEpisod;
    } else {
        let { nextPageEpisod } = getState().episodes
        pageToGo = nextPageEpisod;
    }

    return client.query({
        query,

        variables: { page: pageToGo }
    }).then(({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: error
            })
            return
        }
        for (let i = 0; i < data.episodes.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.episodes.results[i].characters.splice(5, data.episodes.results[i].characters.length);
            }
        }
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes.results
        })
        dispatch({
            type: UPDATE_PAGE_EPISODE,
            payload: {
                next: data.episodes.info.next ? data.episodes.info.next : null,
                prev: data.episodes.info.prev ? data.episodes.info.prev : null,
                total: data.episodes.info.pages
            }
        })
    })

}