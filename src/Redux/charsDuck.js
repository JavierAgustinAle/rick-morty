import ApolloClient, { gql } from "apollo-boost"


let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
})

let GET_CHARACTERS = 'GET_CHARACTERS';
let GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
let GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';


let initialData = {
    fetching: false,
    array: []
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
        query ($page: Int){
            characters(page: $page){
            results{
                id
                name
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

