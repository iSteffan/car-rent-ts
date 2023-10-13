import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertsPerPage, fetchAdvertsAmount } from './advertOperations';

const handlePending = state => {
  return { ...state, isLoading: true };
};

const handleRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const handleFetchAdvertsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleFetchAdvertsPerPageSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    items: [...state.items, ...action.payload],
  };
};

const handleFetchAdvertsAmountSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, itemPages: action.payload };
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    itemPages: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsSuccess)

      .addCase(fetchAdvertsPerPage.pending, handlePending)
      .addCase(fetchAdvertsPerPage.rejected, handleRejected)
      .addCase(fetchAdvertsPerPage.fulfilled, handleFetchAdvertsPerPageSuccess)

      .addCase(fetchAdvertsAmount.pending, handlePending)
      .addCase(fetchAdvertsAmount.rejected, handleRejected)
      .addCase(fetchAdvertsAmount.fulfilled, handleFetchAdvertsAmountSuccess);
  },
});

export const advertsReducer = advertsSlice.reducer;

// Selector
export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectAmount = state => state.adverts.itemPages;
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchAdverts, fetchAdvertsPerPage, fetchAdvertsAmount } from './advertOperations';
// import { Data } from '../App.types';

// interface AdvertsState {
//   items: Data[];
//   isLoading: boolean;
//   error: string | null;
//   itemPages: Data[];
// }

// const initialState: AdvertsState = {
//   items: [],
//   isLoading: false,
//   error: null,
//   itemPages: [],
// };

// const handlePending = (state: AdvertsState) => {
//   return { ...state, isLoading: true };
// };

// const handleRejected = (state: AdvertsState, action: PayloadAction<string | undefined>) => {
//   return { ...state, isLoading: false, error: action.payload || 'An error occurred' };
// };

// const handleFetchAdvertsSuccess = (state: AdvertsState, action: PayloadAction<Data[]>) => {
//   return { ...state, isLoading: false, error: null, items: action.payload };
// };

// const handleFetchAdvertsPerPageSuccess = (state: AdvertsState, action: PayloadAction<Data[]>) => {
//   return {
//     ...state,
//     isLoading: false,
//     error: null,
//     items: [...state.items, ...action.payload],
//   };
// };

// const handleFetchAdvertsAmountSuccess = (state: AdvertsState, action: PayloadAction<Data[]>) => {
//   return { ...state, isLoading: false, error: null, itemPages: action.payload };
// };

// const advertsSlice = createSlice({
//   name: 'adverts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchAdverts.pending, handlePending)
//       .addCase(fetchAdverts.rejected, handleRejected)
//       .addCase(fetchAdverts.fulfilled, handleFetchAdvertsSuccess)

//       .addCase(fetchAdvertsPerPage.pending, handlePending)
//       .addCase(fetchAdvertsPerPage.rejected, handleRejected)
//       .addCase(fetchAdvertsPerPage.fulfilled, handleFetchAdvertsPerPageSuccess)

//       .addCase(fetchAdvertsAmount.pending, handlePending)
//       .addCase(fetchAdvertsAmount.rejected, handleRejected)
//       .addCase(fetchAdvertsAmount.fulfilled, handleFetchAdvertsAmountSuccess);
//   },
// });

// export const advertsReducer = advertsSlice.reducer;

// // Selector
// export const selectAdverts = (state: { adverts: AdvertsState }) => state.adverts.items;
// export const selectIsLoading = (state: { adverts: AdvertsState }) => state.adverts.isLoading;
// export const selectError = (state: { adverts: AdvertsState }) => state.adverts.error;
// export const selectAmount = (state: { adverts: AdvertsState }) => state.adverts.itemPages;
