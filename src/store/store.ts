import { configureStore } from '@reduxjs/toolkit';
import { conversionSlice } from './slices/conversionSlice';
import { settingsSlice } from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    conversion: conversionSlice.reducer,
    settings: settingsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;