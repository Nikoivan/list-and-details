import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DetailsItemProps } from '../../../components/Details/Item/Details-Item';

export type RequestTargetAction = PayloadAction<string>;
export type SuccessTargetAction = PayloadAction<DetailsItemProps>;
export type FailureTargetAction = PayloadAction<string>;

export type AllTargetActions = RequestTargetAction | SuccessTargetAction | FailureTargetAction;

type DetailsState = {
  query: string | null;
  loading: boolean;
  data: DetailsItemProps | null;
  error: string | null;
};

const initialState: DetailsState = {
  query: null,
  loading: false,
  data: null,
  error: null,
};

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    targetRequest: (state, action: RequestTargetAction) => {
      state.query = action.payload;
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    targetSuccess: (state, action: SuccessTargetAction) => {
      state.loading = false;
      state.data = action.payload;
    },
    targetFailure: (state, action: FailureTargetAction) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const targetActions = targetSlice.actions;
export const targetReducer = targetSlice.reducer;
export const targetSelector = (state: RootState) => state.target;
