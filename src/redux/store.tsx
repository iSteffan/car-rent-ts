import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './advertSlice';
import { favoritesReducer } from './favor/favoritesSlice';

const persistConfig = {
  key: 'favorites',
  storage,
};

const rootReducer = combineReducers({
  favorites: persistReducer(persistConfig, favoritesReducer),
  adverts: advertsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
