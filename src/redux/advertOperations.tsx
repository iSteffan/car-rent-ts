import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ResponseData } from '../App.types';

type ApiError = AxiosError<SerializedError>;

axios.defaults.baseURL = 'https://6461dd0e491f9402f4ac4549.mockapi.io/';

export const fetchAdverts = createAsyncThunk<ResponseData[], void, { rejectValue: ApiError }>(
  'adverts/fetchFirstPage',
  async (_, thunkAPI) => {
    try {
      const response: AxiosResponse<ResponseData[]> = await axios.get(`/adverts?page=1&limit=8`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);

export const fetchAdvertsPerPage = createAsyncThunk<
  ResponseData[],
  void,
  { rejectValue: ApiError }
>('adverts/fetchPerPage', async (page, thunkAPI) => {
  try {
    const response: AxiosResponse<ResponseData[]> = await axios.get(
      `/adverts?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as ApiError);
  }
});

export const fetchAdvertsAmount = createAsyncThunk<ResponseData[], void, { rejectValue: ApiError }>(
  'adverts/fetchAdvertsAmount',
  async (_, thunkAPI) => {
    try {
      const response: AxiosResponse<ResponseData[]> = await axios.get(`/adverts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as ApiError);
    }
  }
);
