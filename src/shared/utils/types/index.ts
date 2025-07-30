export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  type?: 'metric' | 'imperial' | 'other';
  description?: string;
}

export interface ConversionResult {
  unit: Unit;
  value: number;
  formattedValue: string;
}

export interface ConversionCategory {
  id: string;
  name: string;
  icon: string;
  tab: TabId;
  color: string;
}

export type TabId = 'basic' | 'living' | 'science' | 'misc';

export interface ConversionTab {
  id: TabId;
  name: string;
  color: string;
}

export class ConversionError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'ConversionError';
  }
}

export interface AppSettings {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  precision: number;
  theme: 'light' | 'dark';
}