import { BaseConverter } from '../core/BaseConverter';
import { Unit } from '@/shared/utils/types';

const weightUnits: Unit[] = [
  { id: 'mg', name: 'Milligram', symbol: 'mg', factor: 1e-6, type: 'metric' },
  { id: 'g', name: 'Gram', symbol: 'g', factor: 0.001, type: 'metric' },
  { id: 'kg', name: 'Kilogram', symbol: 'kg', factor: 1, type: 'metric' },
  { id: 'oz', name: 'Ounce', symbol: 'oz', factor: 0.0283495, type: 'imperial' },
  { id: 'lb', name: 'Pound', symbol: 'lb', factor: 0.453592, type: 'imperial' },
  { id: 'stone', name: 'Stone', symbol: 'stone', factor: 6.35029, type: 'imperial' }
];

export class WeightConverter extends BaseConverter {
  constructor() {
    super(weightUnits, 'kg', 'weight', 8);
  }
}