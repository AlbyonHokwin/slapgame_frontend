import { configureStore } from '@reduxjs/toolkit';
import user from '@/reducers/user';
import game from '@/reducers/game';

export const store = configureStore({
  reducer: {
    user,
    game,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
