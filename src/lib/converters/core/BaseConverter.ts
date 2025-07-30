import { Unit, ConversionResult, ConversionError } from '@/shared/utils/types';

export abstract class BaseConverter {
  protected units: Unit[];
  protected baseUnit: Unit;
  protected precision: number;
  protected readonly categoryId: string;

  constructor(
    units: Unit[], 
    baseUnitId: string, 
    categoryId: string,
    precision: number = 8
  ) {
    this.units = units;
    this.categoryId = categoryId;
    this.precision = precision;
    
    const baseUnit = this.findUnit(baseUnitId);
    if (!baseUnit) {
      throw new ConversionError(`Base unit ${baseUnitId} not found`);
    }
    this.baseUnit = baseUnit;
  }

  public convert(value: number, fromUnitId: string, toUnitId: string): number {
    if (fromUnitId === toUnitId) return value;
    
    const fromUnit = this.findUnit(fromUnitId);
    const toUnit = this.findUnit(toUnitId);
    
    if (!fromUnit || !toUnit) {
      throw new ConversionError('Invalid unit specified');
    }

    return this.performConversion(value, fromUnit, toUnit);
  }

  public convertToAll(value: number, fromUnitId: string): ConversionResult[] {
    if (!value || isNaN(value)) return [];

    return this.units.map(unit => ({
      unit,
      value: this.convert(value, fromUnitId, unit.id),
      formattedValue: this.formatValue(this.convert(value, fromUnitId, unit.id))
    }));
  }

  protected performConversion(value: number, fromUnit: Unit, toUnit: Unit): number {
    // Convert to base unit first, then to target unit
    const baseValue = value * fromUnit.factor;
    return baseValue / toUnit.factor;
  }

  protected findUnit(unitId: string): Unit | undefined {
    return this.units.find(u => u.id === unitId);
  }

  protected formatValue(value: number): string {
    if (value === 0) return '0';
    
    const absValue = Math.abs(value);
    
    if (absValue >= 1e6 || absValue <= 1e-6) {
      return value.toExponential(6);
    }
    
    return Number(value.toPrecision(this.precision)).toString();
  }

  public getUnits(): Unit[] {
    return [...this.units];
  }

  public getCategoryId(): string {
    return this.categoryId;
  }
}