import { BaseConverter } from '../core/BaseConverter';
import { Unit } from '@/shared/utils/types';

const temperatureUnits: Unit[] = [
  { id: 'c', name: 'Celsius', symbol: '°C', factor: 1 },
  { id: 'f', name: 'Fahrenheit', symbol: '°F', factor: 1 },
  { id: 'k', name: 'Kelvin', symbol: 'K', factor: 1 }
];

export class TemperatureConverter extends BaseConverter {
  constructor() {
    super(temperatureUnits, 'c', 'temperature', 2);
  }

  protected performConversion(value: number, fromUnit: Unit, toUnit: Unit): number {
    if (fromUnit.id === toUnit.id) return value;

    // Convert to Celsius first
    let celsius: number;
    switch (fromUnit.id) {
      case 'c': celsius = value; break;
      case 'f': celsius = (value - 32) * 5/9; break;
      case 'k': celsius = value - 273.15; break;
      default: throw new Error(`Unknown temperature unit: ${fromUnit.id}`);
    }

    // Convert from Celsius to target unit
    switch (toUnit.id) {
      case 'c': return celsius;
      case 'f': return celsius * 9/5 + 32;
      case 'k': return celsius + 273.15;
      default: throw new Error(`Unknown temperature unit: ${toUnit.id}`);
    }
  }
}