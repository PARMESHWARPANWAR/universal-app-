'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useConversion } from '@/features/conversion/hooks/useConversion';
import { ChevronDown, RotateCcw, Star } from 'lucide-react';

export const Converter: React.FC = () => {
  const { selectedCategory } = useSelector((state: RootState) => state.conversion);
  const [showUnitSelector, setShowUnitSelector] = useState(false);
  
  const {
    inputValue,
    fromUnit,
    results,
    units,
    updateInputValue,
    updateFromUnit,
    isLoading,
  } = useConversion(selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      updateInputValue(value);
    }
  };

  const selectedUnitObj = units.find(u => u.id === fromUnit);

  if (isLoading) {
    return (
      <div className="p-4 bg-white">
        <div className="animate-pulse space-y-4">
          <div className="h-16 bg-gray-200 rounded-lg"></div>
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white">
      {/* Input Section */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-lg bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Enter value"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <RotateCcw className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowUnitSelector(!showUnitSelector)}
              className="px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors flex items-center space-x-2 min-w-[80px]"
            >
              <span className="font-medium text-gray-700">
                {selectedUnitObj?.symbol || fromUnit}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            
            {showUnitSelector && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowUnitSelector(false)}
                />
                <div className="absolute top-full mt-1 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-40 w-48 max-h-60 overflow-y-auto">
                  {units.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => {
                        updateFromUnit(unit.id);
                        setShowUnitSelector(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between"
                    >
                      <span className="font-medium">{unit.symbol}</span>
                      <span className="text-sm text-gray-500">{unit.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">Results</h3>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Star className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
        {results.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            Enter a value to see conversions
          </div>
        ) : (
          results.map((result, index) => (
            <div
              key={result.unit.id}
              className={`flex justify-between items-center py-4 px-4 rounded-lg transition-colors ${
                index === 0
                  ? 'bg-blue-50 border-l-4 border-blue-500'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className={`text-lg font-semibold ${
                  index === 0 ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {result.formattedValue}
                </span>
                <span className={`text-sm font-medium ${
                  index === 0 ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {result.unit.symbol}
                </span>
              </div>
              <span className="text-sm text-gray-500">{result.unit.name}</span>
            </div>
          ))
        )}
      </div>

      {/* Currency Section (when currency is selected) */}
      {selectedCategory === 'currency' && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            ※ Updated: Jul 30, 2025, 1:22 PM
          </div>
        </div>
      )}

      {/* Bottom Action Area */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View Favorites
          </button>
        </div>
      </div>
    </div>
  );
};