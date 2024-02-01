import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type RequesDetailsAction = PayloadAction<string>;
export type SuccessDetailsAction = PayloadAction<string[]>;
export type FailureDetailsAction = PayloadAction<string>;

export type DetailsActions = RequesDetailsAction | SuccessDetailsAction | FailureDetailsAction;

type DetailsState = {
  loading: boolean;
  requestId: string;
  data: string[];
  error: string | null;
};

const initialState: DetailsState = {
  loading: false,
  requestId: '',
  data: [],
  error: null,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    detailsRequest: (state, action: RequesDetailsAction) => {
      state.requestId = action.payload;
      state.loading = true;
    },
    detailsSuccess: (state, action: SuccessDetailsAction) => {
      console.log('success');
      state.loading = false;
      state.data = action.payload;
    },
    detailsFailure: (state, action: FailureDetailsAction) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const detailsActions = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
export const detailsSelector = (state: RootState) => state.details;
