import {
    FETCH_ALL_VIDEOS,
    REMOVE_FROM_SAVED_VIDEOS,
    ADD_TO_SAVED_VIDEOS,
    FETCH_VIDEOS_SUCCESS,
    FETCH_VIDEOS_ERROR,
    SHOW_CATEGORY_VIDEOS,
    CURRENT_VIDEO_PLAY,
    BACK_TO_LAST_PAGE,
    SEARCH_VIDEO,
} from "./ActionTypes";

const initialState = {
    loading: false,
    errorMessage: "",
    allVideos: [],
    savedVideos: [],
    categoryId: 0,
    videoToPlay: {},
    lastPath: "",
    videoToSearch: "",
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_VIDEOS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: "",
                allVideos: action.payload,
            };
        case FETCH_VIDEOS_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                allVideos: [],
            };
        case ADD_TO_SAVED_VIDEOS:
            return {
                ...state,
                savedVideos: [...state.savedVideos, action.payload],
            };
        case REMOVE_FROM_SAVED_VIDEOS:
            const newsavedVideos = state.savedVideos.filter(
                (item) => item !== action.payload,
            );
            return {
                ...state,
                savedVideos: newsavedVideos,
            };
        case SHOW_CATEGORY_VIDEOS:
            return {
                ...state,
                categoryId: action.payload,
            };
        case CURRENT_VIDEO_PLAY:
            return {
                ...state,
                videoToPlay: action.payload,
            };
        case BACK_TO_LAST_PAGE:
            return {
                ...state,
                lastPath: action.payload,
            };
        case SEARCH_VIDEO:
            return {
                ...state,
                videoToSearch: action.payload,
            };
        default:
            return state;
    }
};
export default Reducers;
