import { useState, useCallback, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { ConverterFactory } from '@/lib/converters/core/ConverterFactory';
import { ConversionResult } from '@/shared/utils/types';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { setInputValue, setFromUnit, setResults } from '@/store/slices/conversionSlice';

export const useConversion = (categoryId: string) => {
  const dispatch = useDispatch();
  const { inputValue, fromUnit, results } = useSelector((state: RootState) => state.conversion);
  
  const debouncedValue = useDebounce(inputValue, 300);
  
  const converter = useMemo(() => {
    try {
      return ConverterFactory.getConverter(categoryId);
    } catch (error) {
      console.error('Error creating converter:', error);
      return null;
    }
  }, [categoryId]);

  const units = useMemo(() => {
    return converter?.getUnits() || [];
  }, [converter]);

  const performConversion = useCallback(() => {
    if (!converter || !fromUnit || !debouncedValue) {
      dispatch(setResults([]));
      return;
    }

    try {
      const numValue = parseFloat(debouncedValue);
      if (isNaN(numValue)) {
        dispatch(setResults([]));
        return;
      }

      const conversionResults = converter.convertToAll(numValue, fromUnit);
      dispatch(setResults(conversionResults));
    } catch (error) {
      console.error('Conversion error:', error);
      dispatch(setResults([]));
    }
  }, [converter, fromUnit, debouncedValue, dispatch]);

  const updateInputValue = useCallback((value: string) => {
    dispatch(setInputValue(value));
  }, [dispatch]);

  const updateFromUnit = useCallback((unitId: string) => {
    dispatch(setFromUnit(unitId));
  }, [dispatch]);

  // Auto-perform conversion
  useEffect(() => {
    performConversion();
  }, [performConversion]);

  // Set default unit
  useEffect(() => {
    if (units.length > 0 && !fromUnit) {
      updateFromUnit(units[0].id);
    }
  }, [units, fromUnit, updateFromUnit]);

  return {
    inputValue,
    fromUnit,
    results,
    units,
    updateInputValue,
    updateFromUnit,
    isLoading: !converter,
  };
};