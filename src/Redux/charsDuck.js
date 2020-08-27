import ApolloClient, { gql } from "apollo-boost"


let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_CHARACTERS = 'GET_CHARACTERS';
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

let GET_FILTERS = 'GET_FILTERS';
let GET_FILTERS_ERROR = 'GET_FILTERS_ERROR';
let GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';

let REMOVE_FILTERED = 'REMOVE_FILTERED';

let initialData = {
    fetching: false,
    array: [],
    filtered: []
}


// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, fetching: true }
        case GET_CHARACTERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_CHARACTERS_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        case GET_FILTERS:
            return { ...state, fetching: true }
        case GET_FILTERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_FILTERS_SUCCESS:
            return { ...state, filtered: action.payload, fetching: false }
        case REMOVE_FILTERED:
            return { ...state, filtered: action.payload }
        default:
            return state
    }
}

//Actions Creators

export let getCharFiltersAction = (searchName, searchType) => (dispatch, getState) => {
    let query = gql`
    query ($name: String, $type: String) {
        characters( filter: { name: $name, type: $type }) {
          results {
            id
            name
            image
            type
            gender
            species
            status
          }
        }
      }
    `
    dispatch({
        type: GET_FILTERS
    })

    return client.query({
        query,
        variables: { name: searchName, type: searchType }
    }).then(({ data, errors }) => {
        if (errors) {
            dispatch({
                type: GET_FILTERS_ERROR,
                payload: errors.message
            })
            return
        }
        dispatch({
            type: GET_FILTERS_SUCCESS,
            payload: data.characters.results

        })
    })

}

export let removeSearchCharAction = () => (dispatch, getState) => {
    let filtered = []

    dispatch({
        type: REMOVE_FILTERED,
        payload: filtered
    })


}


export let getCharactersAction = () => (dispatch, getState) => {
    let query = gql`
        query ($page: Int){
            characters(page: $page){
            results{
                id
                name
                image
                type
                gender
                species
            }
         }
        }
    `
    dispatch({
        type: GET_CHARACTERS
    })

    let pageInitial = Math.floor(Math.random() * (34 - 1)) + 1;

    return client.query({
        query,
        variables: { page: pageInitial }
    }).then(({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: error
            })
            return
        }
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.characters.results

        })
    })

}

