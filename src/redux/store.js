import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";


const reducerFn = (state, action) => {

}
const store = configureStore({
    reducer: {

        trendingState: "day",
        setTrendingState: (trending) => { store.getState().trendingState = trending},
        movies: [{}],
        setMovies: (trendingState) => fetch(`${trendingState}`)
    },

});

export default store;