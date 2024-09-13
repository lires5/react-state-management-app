import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../api/api'; // Import getUsers
import { User } from '../types';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// You can keep the API_URL here if getUsers requires it, or manage it inside getUsers
// const API_URL = 'https://api.example.com/users';

// Update fetchUsers to use getUsers instead of axios directly
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const data = await getUsers(); // Use getUsers
  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Add reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;