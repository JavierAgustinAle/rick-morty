import ApolloClient, { gql } from "apollo-boost";

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_EPISODES = 'GET_EPISODES';
let GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS';
let GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';

let initialData = {
    fetching: false,
    array: [],
    current: {}
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
        default:
            return state
    }
}

//Actions Creators

export let getEpisodesAction = () => (dispatch, getState) => {
    let query = gql`
        {
            episodes{
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

    return client.query({
        query
    }).then(({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: error
            })
            return
        }
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes.results
        })


    })

}