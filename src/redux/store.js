import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


import cartSlice from './cartSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({cart: cartSlice})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
})

