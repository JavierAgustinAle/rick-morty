import ApolloClient, { gql } from "apollo-boost";

let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_LOCATIONS = 'GET_LOCATIONS';
let GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
let GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR';

let initialData = {
    fetching: false,
    array: []
}

// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_LOCATIONS:
            return { ...state, fetching: true }
        case GET_LOCATIONS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_LOCATIONS_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        default:
            return state
    }
}

//Actions Creators

export let getLocationsAction = () => (dispatch, getState) => {
    let query = gql`
        {
            locations{
                results{
                  id
                  name
                  type
                  dimension
                  residents{
                    id
                    name
                  }
                }
              }
        }
    `
    dispatch({
        type: GET_LOCATIONS
    })

    return client.query({
        query
    }).then(({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_LOCATIONS_ERROR,
                payload: error
            })
            return
        } else {
            for (let i = 0; i < data.locations.results.length; i++) {
                for (let x = 0; x < 5; x++) {
                    data.locations.results[i].residents.splice(5, data.locations.results[i].residents.length);
                }
            }

            dispatch({
                type: GET_LOCATIONS_SUCCESS,
                payload: data.locations.results
            })
        }



    })

}