import { BaseConverter } from '../core/BaseConverter';
import { Unit } from '@/shared/utils/types';

const lengthUnits: Unit[] = [
  { id: 'mm', name: 'Millimeter', symbol: 'mm', factor: 0.001, type: 'metric' },
  { id: 'cm', name: 'Centimeter', symbol: 'cm', factor: 0.01, type: 'metric' },
  { id: 'm', name: 'Meter', symbol: 'm', factor: 1, type: 'metric' },
  { id: 'km', name: 'Kilometer', symbol: 'km', factor: 1000, type: 'metric' },
  { id: 'in', name: 'Inch', symbol: 'in', factor: 0.0254, type: 'imperial' },
  { id: 'ft', name: 'Foot', symbol: 'ft', factor: 0.3048, type: 'imperial' },
  { id: 'yd', name: 'Yard', symbol: 'yd', factor: 0.9144, type: 'imperial' },
  { id: 'mi', name: 'Mile', symbol: 'mi', factor: 1609.344, type: 'imperial' }
];

export class LengthConverter extends BaseConverter {
  constructor() {
    super(lengthUnits, 'm', 'length', 8);
  }
}