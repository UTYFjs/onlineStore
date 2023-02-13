import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IAppState {
  isBurgerOpen: boolean;
}

const initialState: IAppState = {
  isBurgerOpen: false,
};

const slice = createSlice({
  name: 'basicStore',
  initialState,
  reducers: {
    setBurgerOpen(state, action: PayloadAction<boolean>) {
      state.isBurgerOpen = action.payload;
    },
  },
});

export const { setBurgerOpen } = slice.actions;

export default slice.reducer;
