import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  email: string;
};

const initialState: UserState = {
  username: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    removeUser: (state) => {
      state = initialState;
    }
  },
});

export const { addUsername, removeUser } = userSlice.actions;

export default userSlice.reducer;