import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DetailsItemProps } from '../../../components/Details/Item/Details-Item';

export type RequesDetailsAction = PayloadAction;
export type SuccessDetailsAction = PayloadAction<DetailsItemProps[]>;
export type FailureDetailsAction = PayloadAction<string>;

export type DetailsActions = RequesDetailsAction | SuccessDetailsAction | FailureDetailsAction;

type DetailsState = {
  loading: boolean;
  requestId: string;
  data: DetailsItemProps[];
  itemData: null | DetailsItemProps;
  error: string | null;
};

const initialState: DetailsState = {
  loading: false,
  requestId: '',
  data: [],
  itemData: null,
  error: null,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    detailsRequest: (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
    },
    detailsSuccess: (state, action: SuccessDetailsAction) => {
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
