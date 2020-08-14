import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING, CLEAR_MOVIES
} from '../actions/types';

const initialState = {
    movies: [],
    loading: false,
    movie: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR_MOVIES:
            return {
                ...state,
                movies: [],
                movie: [],
                loading: false
            }
        default:
            return state;
    }
}