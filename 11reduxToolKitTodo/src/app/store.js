import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// store is like a global container for your app state
export const store = configureStore({
    reducer:todoReducer
})

// configureStore is a function provided by redux toolkit
// used to create the redux store
// it is the modern and recommended way to create a store
// it combines reducers ,  adds redux devtools support, adds middleware like redux-thunk

//todoreducer is the default export from that slice
