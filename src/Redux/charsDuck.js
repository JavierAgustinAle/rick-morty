import ApolloClient, { gql } from "apollo-boost"


let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_CHARACTERS = 'GET_CHARACTERS';
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';


let initialData = {
    fetching: false,
    array: [],
    current: {}
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
        default:
            return state
    }
}

//Actions Creators

export let getCharactersAction = () => (dispatch, getState) => {
    let query = gql`
        {
            characters{
                results{
                    name
                    image
                }
            }
        }
    `
    dispatch({
        type: GET_CHARACTERS
    })

    return client.query({
        query
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
