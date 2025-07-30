import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSettings } from '@/shared/utils/types';

const initialState: AppSettings = {
  soundEnabled: true,
  vibrationEnabled: true,
  precision: 8,
  theme: 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSoundEnabled: (state, action: PayloadAction<boolean>) => {
      state.soundEnabled = action.payload;
    },
    setVibrationEnabled: (state, action: PayloadAction<boolean>) => {
      state.vibrationEnabled = action.payload;
    },
    setPrecision: (state, action: PayloadAction<number>) => {
      state.precision = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setSoundEnabled,
  setVibrationEnabled,
  setPrecision,
  setTheme,
} = settingsSlice.actions;