import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertsPerPage, fetchAdvertsAmount } from './advertOperations';
import { ResponseData } from '../App.types';

interface AdvertsState {
  items: ResponseData[];
  isLoading: boolean;
  error: string | null;
  itemPages: ResponseData[];
}

const initialState: AdvertsState = {
  items: [],
  isLoading: false,
  error: null,
  itemPages: [],
};

const handlePending = (state: AdvertsState) => {
  return { ...state, isLoading: true };
};

const handleRejected = (state: AdvertsState, action: PayloadAction<string | undefined>) => {
  return { ...state, isLoading: false, error: action.payload || 'An error occurred' };
};

const handleFetchAdvertsSuccess = (state: AdvertsState, action: PayloadAction<ResponseData[]>) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleFetchAdvertsPerPageSuccess = (
  state: AdvertsState,
  action: PayloadAction<ResponseData[]>
) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [...state.items, ...action.payload],
  };
};

const handleFetchAdvertsAmountSuccess = (
  state: AdvertsState,
  action: PayloadAction<ResponseData[]>
) => {
  return { ...state, isLoading: false, error: null, itemPages: action.payload };
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAdverts.pending, handlePending);
    // builder.addCase(fetchAdverts.rejected, handleRejected);
    builder.addCase(fetchAdverts.fulfilled, handleFetchAdvertsSuccess);
    builder.addCase(fetchAdvertsPerPage.pending, handlePending);
    // builder.addCase(fetchAdvertsPerPage.rejected, handleRejected);
    builder.addCase(fetchAdvertsPerPage.fulfilled, handleFetchAdvertsPerPageSuccess);
    builder.addCase(fetchAdvertsAmount.pending, handlePending);
    // builder.addCase(fetchAdvertsAmount.rejected, handleRejected);
    builder.addCase(fetchAdvertsAmount.fulfilled, handleFetchAdvertsAmountSuccess);
  },
});

export const advertsReducer = advertsSlice.reducer;

// Selector
export const selectAdverts = (state: { adverts: AdvertsState }) => state.adverts.items;
export const selectIsLoading = (state: { adverts: AdvertsState }) => state.adverts.isLoading;
export const selectError = (state: { adverts: AdvertsState }) => state.adverts.error;
export const selectAmount = (state: { adverts: AdvertsState }) => state.adverts.itemPages;
