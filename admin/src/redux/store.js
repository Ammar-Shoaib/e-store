import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import productReducer from './productRedux'

export default configureStore({
    reducer:{
        user:userReducer,
        product:productReducer
    }
})