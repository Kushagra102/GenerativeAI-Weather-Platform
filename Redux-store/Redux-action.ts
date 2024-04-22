import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './Redux-store';

// Define a type for the slice state

export interface actionState {
  Image_src: {
    data: string;
    isMobile: boolean;
  };
  SearchQuery: string;
}

// Define the initial state using that type
const initialState: actionState = {
  Image_src: {
    data: '',
    isMobile: false,
  },
  SearchQuery: '',
};

export const actionSlice = createSlice({
  name: 'action',
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    set_Image_src: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      },
    ) => {
      state.Image_src = action.payload;
    },
    setSearchQuery: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      },
    ) => {
      state.SearchQuery = action.payload;
    },
  },
});

export const {
  set_Image_src,
  setSearchQuery,
} = actionSlice.actions;

export const Image_src_data = (state: RootState) => state.action.Image_src;
export const SearchQuery_data = (state: RootState) => state.action.SearchQuery;

export default actionSlice.reducer;