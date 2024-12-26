import { configureStore } from '@reduxjs/toolkit';
import { tokenAPI } from '../services/token';  // Example of an API slice
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // LocalStorage or SessionStorage
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

// Combine reducers (for multiple slices)
const rootReducer = combineReducers({
  [tokenAPI.reducerPath]: tokenAPI.reducer,
});

// Persist the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,  // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat(tokenAPI.middleware)
});

export const persistor = persistStore(store);  // Persistor for the store