import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () =>{
    try{
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
        return response.data
    } catch(error){
        console.log(error)
    }
})

export const getPopular = createAsyncThunk('popular/getPopular', async () =>{
    try{
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
        return response.data
    } catch(error){
        console.log(error)
    }
})

export const getToprated = createAsyncThunk('topRated/getToprated', async () =>{
    try{
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
        return response.data
    } catch(error){
        console.log(error)
    }
})

export const fetchGenre = createAsyncThunk('genre/fetchGenre', async () =>{
    try{
        const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
        return res.data
    } catch(error){
        console.log(error)
    }
})

const initialState={
    movies: [],
    genre:[],
    popular: [],
    topRated: [],
    loading: true, 
    error: null
}

export const movSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchMovies.pending]: (state) => {
            state.loading = true
        },
        [fetchMovies.fulfilled]: (state, {payload}) => {
            state.movies = payload.results
            state.loading = false
        },
        [fetchMovies.rejected]: (state) => {
            state.loading = false
        },
        [getPopular.pending]: (state) => {
            state.loading = true
        },
        [getPopular.fulfilled]: (state, {payload}) => {
            state.popular = payload.results
            state.loading = false
        },
        [getPopular.rejected]: (state) => {
            state.loading = false
        },
        [getToprated.pending]: (state) => {
            state.loading = true
        },
        [getToprated.fulfilled]: (state, {payload}) => {
            state.topRated = payload.results
            state.loading = false
        },
        [getToprated.rejected]: (state) => {
            state.loading = false
        },
        [fetchGenre.pending]: (state) => {
            state.loading = true
        },
        [fetchGenre.fulfilled]: (state, {payload}) => {
            state.genre = payload.genres
            state.loading = false
        },
        [fetchGenre.rejected]: (state) => {
            state.loading = false
        },
    },
});

export const moviesReducer = movSlice.reducer;