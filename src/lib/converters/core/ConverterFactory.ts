import { BaseConverter } from './BaseConverter';
import { ConversionError } from '@/shared/utils/types';
import { LengthConverter } from '../basic/LengthConverter';
import { WeightConverter } from '../basic/WeightConverter';
import { TemperatureConverter } from '../living/TemperatureConverter';
import { CurrencyConverter } from '../living/CurrencyConverter';

export class ConverterFactory {
  private static instances: Map<string, BaseConverter> = new Map();

  static getConverter(categoryId: string): BaseConverter {
    if (!this.instances.has(categoryId)) {
      let converter: BaseConverter;
      
      switch (categoryId) {
        case 'length':
          converter = new LengthConverter();
          break;
        case 'weight':
          converter = new WeightConverter();
          break;
        case 'temperature':
          converter = new TemperatureConverter();
          break;
        case 'currency':
          converter = new CurrencyConverter();
          break;
        default:
          throw new ConversionError(`Unknown converter category: ${categoryId}`);
      }
      
      this.instances.set(categoryId, converter);
    }
    
    return this.instances.get(categoryId)!;
  }

  static clearCache(): void {
    this.instances.clear();
  }
}