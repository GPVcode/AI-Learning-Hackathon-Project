import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, verifyToken } from '../../api/userAPI';

export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await registerUser(userData);
            if (response.success) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue(response.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'An unexpected error occurred.');
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await loginUser(userData);
            if (response.success) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue(response.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || 'An unexpected error occurred.');
        }
    }
);

export const reauthenticate = createAsyncThunk(
  'auth/reauthenticate',
  async (_, thunkAPI) => {
      try {
          const token = localStorage.getItem('token');
          if (!token) {
              return thunkAPI.rejectWithValue('No token found.');
          }
          
          // Make a request to your backend to validate the token
          const response = await verifyToken(token);

          if (response.success) {
              return response.user;  // user data
          } else {
              return thunkAPI.rejectWithValue(response.message || 'Token 555 validation failed.');
          }
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message || 'An unexpected error occurred.');
      }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
    registrationSuccess: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      state.registrationSuccess = false;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.isLoading = false;
        state.registrationSuccess = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem('token', action.payload.token);
        state.isLoading = false;
        state.registrationSuccess = false;
      })
      .addCase(reauthenticate.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;  // set user data
      })
      .addMatcher(
        (action) => action.type === reauthenticate.rejected.type,
        (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
