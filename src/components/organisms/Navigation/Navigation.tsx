'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setSelectedTab, setSelectedCategory } from '@/store/slices/conversionSlice';

const tabs = [
  { id: 'basic', name: 'BASIC', color: 'bg-blue-500' },
  { id: 'living', name: 'LIVING', color: 'bg-green-500' },
  { id: 'science', name: 'SCIENCE', color: 'bg-purple-500' },
  { id: 'misc', name: 'MISC.', color: 'bg-orange-500' }
];

const categories: Record<string, any[]> = {
  basic: [
    { id: 'length', name: 'Length', icon: '📏', color: 'bg-blue-50 border-blue-200' },
    { id: 'area', name: 'Area', icon: '◼️', color: 'bg-blue-50 border-blue-200' },
    { id: 'weight', name: 'Weight', icon: '⚖️', color: 'bg-blue-50 border-blue-200' },
    { id: 'volume', name: 'Volume', icon: '📦', color: 'bg-blue-50 border-blue-200' }
  ],
  living: [
    { id: 'currency', name: 'Currency', icon: '💱', color: 'bg-green-50 border-green-200' },
    { id: 'temperature', name: 'Temperature', icon: '🌡️', color: 'bg-green-50 border-green-200' },
    { id: 'time', name: 'Time', icon: '⏰', color: 'bg-green-50 border-green-200' },
    { id: 'speed', name: 'Speed', icon: '🏃', color: 'bg-green-50 border-green-200' }
  ],
  science: [
    { id: 'pressure', name: 'Pressure', icon: '🔽', color: 'bg-purple-50 border-purple-200' },
    { id: 'force', name: 'Force', icon: '➡️', color: 'bg-purple-50 border-purple-200' },
    { id: 'work', name: 'Work', icon: '🔨', color: 'bg-purple-50 border-purple-200' },
    { id: 'power', name: 'Power', icon: '⚡', color: 'bg-purple-50 border-purple-200' }
  ],
  misc: [
    { id: 'torque', name: 'Torque', icon: '🔄', color: 'bg-orange-50 border-orange-200' },
    { id: 'cooking', name: 'Cooking', icon: '🍴', color: 'bg-orange-50 border-orange-200' },
    { id: 'data', name: 'Data', icon: '💾', color: 'bg-orange-50 border-orange-200' },
    { id: 'fuel', name: 'Fuel', icon: '⛽', color: 'bg-orange-50 border-orange-200' }
  ]
};

export const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedTab, selectedCategory } = useSelector((state: RootState) => state.conversion);

  const getTabColor = (tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    return tab ? tab.color : 'bg-gray-500';
  };

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSelectedCategory(categoryId));
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => dispatch(setSelectedTab(tab.id))}
              className={`flex-1 py-3 px-2 text-xs font-medium transition-all duration-200 ${
                selectedTab === tab.id
                  ? `text-white ${getTabColor(tab.id)} shadow-md`
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-3">
          {categories[selectedTab]?.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedCategory === category.id
                  ? `${getTabColor(selectedTab)} text-white shadow-lg transform scale-105`
                  : `${category.color} hover:shadow-md hover:scale-102 text-gray-700`
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};