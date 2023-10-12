import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { advertsReducer } from './advertSlice';
import { favoritesReducer } from './favor/favoritesSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites', // Оновлено ключ на 'favorites'
  storage,
};
export const store = configureStore({
  reducer: {
    favorites: persistReducer(persistConfig, favoritesReducer),
    adverts: advertsReducer,
  },
  // reducer: advertsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
