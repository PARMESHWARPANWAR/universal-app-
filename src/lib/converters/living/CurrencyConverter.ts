import { BaseConverter } from '../core/BaseConverter';
import { Unit } from '@/shared/utils/types';

const currencyUnits: Unit[] = [
  { id: 'usd', name: 'US Dollar', symbol: 'USD', factor: 1 },
  { id: 'inr', name: 'Indian Rupee', symbol: 'INR', factor: 83.25 },
  { id: 'eur', name: 'Euro', symbol: 'EUR', factor: 0.85 },
  { id: 'gbp', name: 'British Pound', symbol: 'GBP', factor: 0.79 },
  { id: 'jpy', name: 'Japanese Yen', symbol: 'JPY', factor: 149.50 }
];

export class CurrencyConverter extends BaseConverter {
  constructor() {
    super(currencyUnits, 'usd', 'currency', 6);
  }
}