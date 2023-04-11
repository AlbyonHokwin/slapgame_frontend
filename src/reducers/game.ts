import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  id: number;
  isStarted: boolean;
  penaltyPrice: number;
  strikeNumber: number;
  combinations: number[];
}

const initialState: GameState = {
  id: 0,
  isStarted: false,
  penaltyPrice: 0,
  strikeNumber: 0,
  combinations: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<GameState>) => {
      state = action.payload;
    },
    removeGame: (state) => {
      state = initialState;
    },
  },
});

export const { addGame, removeGame } = gameSlice.actions;

export default gameSlice.reducer;