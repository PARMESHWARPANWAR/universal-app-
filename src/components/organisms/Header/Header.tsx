'use client';

import React, { useState } from 'react';
import { Calculator, Settings, Menu } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setSoundEnabled, setVibrationEnabled } from '@/store/slices/settingsSlice';

export const Header: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch();
  const { soundEnabled, vibrationEnabled } = useSelector((state: RootState) => state.settings);

  return (
    <header className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-4 shadow-lg relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calculator className="w-6 h-6 " />
          <h1 className="text-lg font-semibold">Unit Converter</h1>
        </div>
        {/* <div className="flex items-center space-x-2">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-full hover:bg-slate-600 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-600 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div> */}
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 w-64">
          <h3 className="font-semibold text-gray-800 mb-3">General Settings</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Sound effects</span>
              <button 
                onClick={() => dispatch(setSoundEnabled(!soundEnabled))}
                className={`w-12 h-6 rounded-full ${soundEnabled ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Vibration</span>
              <button 
                onClick={() => dispatch(setVibrationEnabled(!vibrationEnabled))}
                className={`w-12 h-6 rounded-full ${vibrationEnabled ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${vibrationEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};