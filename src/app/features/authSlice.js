import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.user = action.payload
    },
    clearAuthState: (state) => {
      state.user = null;
    }
  }
});

export const { setAuthState, clearAuthState } = authSlice.actions;
export default authSlice.reducer;