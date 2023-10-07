import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userDetails: null,
  token: null,
  loading: false,
  error: null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userDetails = action.payload.userDetails;
      state.token = action.payload.token;
      state.error = null;
    },
    logout(state) {
      return initialState;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const { login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
