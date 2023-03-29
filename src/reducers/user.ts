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
    addEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    addUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    removeUser: (state) => {
      state = initialState;
    }
  },
});

export const { addUsername, addEmail, addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;