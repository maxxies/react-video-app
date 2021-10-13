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

export const fetchAllVideos = () => {
    return {
        type: FETCH_ALL_VIDEOS,
    };
};

export const fetchAllVideosSuccess = (data) => {
    return {
        type: FETCH_VIDEOS_SUCCESS,
        payload: data,
    };
};
export const fetchAllVideosError = (error) => {
    return {
        type: FETCH_VIDEOS_ERROR,
        payload: error,
    };
};
export const addToSavedVideos = (video) => {
    return {
        type: ADD_TO_SAVED_VIDEOS,
        payload: video,
    };
};

export const removeFromSavedVideos = (video) => {
    return {
        type: REMOVE_FROM_SAVED_VIDEOS,
        payload: video,
    };
};

export const showCategoryVideos = (categoryNumber) => {
    return {
        type: SHOW_CATEGORY_VIDEOS,
        payload: categoryNumber,
    };
};

export const currentPlayVideo = (video) => {
    return {
        type: CURRENT_VIDEO_PLAY,
        payload: video,
    };
};

export const backToLastPage = (path) => {
    return {
        type: BACK_TO_LAST_PAGE,
        payload: path,
    };
};

export const searchVideo = (name) => {
    return {
        type: SEARCH_VIDEO,
        payload: name,
    };
};

export const fetchVideos = () => {
    return function (dispatch) {
        dispatch(fetchAllVideos());
        fetch("./videoDataSet.json") //https://video-app-d61c2-default-rtdb.firebaseio.com/videos.json
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((data) => {
                const videos = [];

                for (const key in data) {
                    const video = {
                        id: key,
                        ...data[key],
                    };
                    videos.push(video);
                }
                dispatch(fetchAllVideosSuccess(videos));
                console.log(videos);
            })
            .catch((error) => {
                dispatch(fetchAllVideosError(error.message));
                console.log(error.message);
            });
    };
};
