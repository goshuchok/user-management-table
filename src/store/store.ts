import { configureStore } from "@reduxjs/toolkit"; 
import useReducer from '../features/slices/usersSlice';

export const store = configureStore({
    reducer: {
        users: useReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;