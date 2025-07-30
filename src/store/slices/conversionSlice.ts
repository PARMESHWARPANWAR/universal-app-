import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConversionResult } from '@/shared/utils/types';

interface ConversionState {
  selectedTab: string;
  selectedCategory: string;
  inputValue: string;
  fromUnit: string;
  results: ConversionResult[];
}

const initialState: ConversionState = {
  selectedTab: 'basic',
  selectedCategory: 'length',
  inputValue: '1',
  fromUnit: 'm',
  results: [],
};

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.fromUnit = '';
      state.results = [];
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setFromUnit: (state, action: PayloadAction<string>) => {
      state.fromUnit = action.payload;
    },
    setResults: (state, action: PayloadAction<ConversionResult[]>) => {
      state.results = action.payload;
    },
  },
});

export const {
  setSelectedTab,
  setSelectedCategory,
  setInputValue,
  setFromUnit,
  setResults,
} = conversionSlice.actions;