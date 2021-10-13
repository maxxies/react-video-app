import { createStore, applyMiddleware } from "redux";
import Reducers from "./Reducers";
import thunkMiddleware from "redux-thunk";
import { fetchVideos } from "./Actions";

const store = createStore(Reducers, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(fetchVideos()); 
export default store;
