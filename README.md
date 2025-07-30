# Professional Unit Converter - Modular & Scalable Architecture

## 📁 Project Structure

```
professional-unit-converter/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── .env.local
├── .env.example
├── .gitignore
├── .eslintrc.json
├── public/
│   ├── icons/
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── favicon.ico
│   ├── manifest.json
│   └── sw.js
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/                   # UI Components (Atomic Design)
│   │   ├── atoms/                   # Basic building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Input.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Icon/
│   │   │   │   ├── Icon.tsx
│   │   │   │   ├── IconRegistry.ts
│   │   │   │   └── index.ts
│   │   │   ├── Typography/
│   │   │   │   ├── Typography.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   ├── Spinner/
│   │   │   └── index.ts
│   │   ├── molecules/               # Component combinations
│   │   │   ├── SearchBar/
│   │   │   ├── UnitSelector/
│   │   │   │   ├── UnitSelector.tsx
│   │   │   │   ├── UnitDropdown.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ConversionInput/
│   │   │   │   ├── ConversionInput.tsx
│   │   │   │   ├── NumericInput.tsx
│   │   │   │   └── index.ts
│   │   │   ├── SettingsToggle/
│   │   │   ├── CategoryCard/
│   │   │   └── index.ts
│   │   ├── organisms/               # Complex components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── HeaderMenu.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Navigation/
│   │   │   │   ├── TabNavigation.tsx
│   │   │   │   ├── CategoryGrid.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Converter/
│   │   │   │   ├── ConverterMain.tsx
│   │   │   │   ├── ConverterInput.tsx
│   │   │   │   ├── ConverterResults.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Settings/
│   │   │   │   ├── SettingsPanel.tsx
│   │   │   │   ├── GeneralSettings.tsx
│   │   │   │   ├── PreferenceSettings.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── templates/               # Page layouts
│   │   │   ├── MainLayout/
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ConverterLayout/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── features/                    # Feature-based modules
│   │   ├── conversion/
│   │   │   ├── components/
│   │   │   │   ├── ConversionForm.tsx
│   │   │   │   ├── ResultsList.tsx
│   │   │   │   ├── UnitGrid.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useConversion.ts
│   │   │   │   ├── useConverter.ts
│   │   │   │   ├── useUnits.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── conversionService.ts
│   │   │   │   ├── unitService.ts
│   │   │   │   └── index.ts
│   │   │   ├── types/
│   │   │   │   ├── conversion.types.ts
│   │   │   │   ├── unit.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── settings/
│   │   │   ├── components/
│   │   │   │   ├── SettingsForm.tsx
│   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useSettings.ts
│   │   │   │   ├── useTheme.ts
│   │   │   │   └── index.ts
│   │   │   ├── services/
│   │   │   │   ├── settingsService.ts
│   │   │   │   └── index.ts
│   │   │   ├── types/
│   │   │   │   ├── settings.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── favorites/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── index.ts
│   │   ├── history/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── shared/                      # Shared utilities & services
│   │   ├── components/              # Shared components
│   │   │   ├── ErrorBoundary/
│   │   │   ├── LoadingSpinner/
│   │   │   ├── Modal/
│   │   │   ├── Toast/
│   │   │   └── index.ts
│   │   ├── hooks/                   # Shared hooks
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useDebounce.ts
│   │   │   ├── useApi.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   └── index.ts
│   │   ├── services/                # External services
│   │   │   ├── api/
│   │   │   │   ├── client.ts
│   │   │   │   ├── endpoints.ts
│   │   │   │   └── index.ts
│   │   │   ├── storage/
│   │   │   │   ├── localStorage.ts
│   │   │   │   ├── sessionStorage.ts
│   │   │   │   └── index.ts
│   │   │   ├── analytics/
│   │   │   │   ├── analytics.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── utils/                   # Utility functions
│   │   │   ├── constants/
│   │   │   │   ├── app.constants.ts
│   │   │   │   ├── ui.constants.ts
│   │   │   │   └── index.ts
│   │   │   ├── helpers/
│   │   │   │   ├── formatting.ts
│   │   │   │   ├── validation.ts
│   │   │   │   ├── math.ts
│   │   │   │   ├── string.ts
│   │   │   │   └── index.ts
│   │   │   ├── types/
│   │   │   │   ├── common.types.ts
│   │   │   │   ├── api.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── lib/                         # Core business logic
│   │   ├── converters/              # Conversion engines
│   │   │   ├── core/
│   │   │   │   ├── BaseConverter.ts
│   │   │   │   ├── ConverterFactory.ts
│   │   │   │   ├── ConverterRegistry.ts
│   │   │   │   ├── ConverterValidator.ts
│   │   │   │   └── index.ts
│   │   │   ├── basic/
│   │   │   │   ├── LengthConverter.ts
│   │   │   │   ├── AreaConverter.ts
│   │   │   │   ├── WeightConverter.ts
│   │   │   │   ├── VolumeConverter.ts
│   │   │   │   └── index.ts
│   │   │   ├── living/
│   │   │   │   ├── CurrencyConverter.ts
│   │   │   │   ├── TemperatureConverter.ts
│   │   │   │   ├── TimeConverter.ts
│   │   │   │   ├── SpeedConverter.ts
│   │   │   │   └── index.ts
│   │   │   ├── science/
│   │   │   │   ├── PressureConverter.ts
│   │   │   │   ├── ForceConverter.ts
│   │   │   │   ├── WorkConverter.ts
│   │   │   │   ├── PowerConverter.ts
│   │   │   │   └── index.ts
│   │   │   ├── misc/
│   │   │   │   ├── TorqueConverter.ts
│   │   │   │   ├── CookingConverter.ts
│   │   │   │   ├── DataConverter.ts
│   │   │   │   ├── FuelConverter.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── data/                    # Static data & configurations
│   │   │   ├── units/
│   │   │   │   ├── basic.units.ts
│   │   │   │   ├── living.units.ts
│   │   │   │   ├── science.units.ts
│   │   │   │   ├── misc.units.ts
│   │   │   │   └── index.ts
│   │   │   ├── categories/
│   │   │   │   ├── categories.config.ts
│   │   │   │   ├── tabs.config.ts
│   │   │   │   └── index.ts
│   │   │   ├── currencies/
│   │   │   │   ├── currencies.data.ts
│   │   │   │   ├── exchange-rates.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── config/                  # App configuration
│   │   │   ├── app.config.ts
│   │   │   ├── theme.config.ts
│   │   │   ├── api.config.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── store/                       # State management
│   │   ├── providers/
│   │   │   ├── StoreProvider.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── index.ts
│   │   ├── slices/
│   │   │   ├── conversionSlice.ts
│   │   │   ├── settingsSlice.ts
│   │   │   ├── favoritesSlice.ts
│   │   │   ├── historySlice.ts
│   │   │   └── index.ts
│   │   ├── middleware/
│   │   │   ├── persistMiddleware.ts
│   │   │   ├── analyticsMiddleware.ts
│   │   │   └── index.ts
│   │   ├── selectors/
│   │   │   ├── conversionSelectors.ts
│   │   │   ├── settingsSelectors.ts
│   │   │   └── index.ts
│   │   ├── store.ts
│   │   └── index.ts
│   ├── styles/                      # Styling
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── variables.css
│   └── types/                       # Global type definitions
│       ├── global.types.ts
│       ├── environment.types.ts
│       └── index.ts
├── tests/                           # Testing
│   ├── __mocks__/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── setup.ts
│   └── jest.config.js
├── scripts/                         # Build & utility scripts
│   ├── build.js
│   ├── generate-types.js
│   └── check-dependencies.js
└── .vscode/                         # IDE configuration
    ├── settings.json
    ├── extensions.json
    └── launch.json
```

## 🏗️ Core Architecture Implementation

### 1. Base Converter Class (`src/lib/converters/core/BaseConverter.ts`)

```typescript
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
    this.baseUnit = this.findUnit(baseUnitId);
    this.categoryId = categoryId;
    this.precision = precision;
    
    if (!this.baseUnit) {
      throw new ConversionError(`Base unit ${baseUnitId} not found`);
    }
  }

  // Core conversion method
  public convert(
    value: number, 
    fromUnitId: string, 
    toUnitId: string
  ): number {
    this.validateInput(value, fromUnitId, toUnitId);
    
    const fromUnit = this.findUnit(fromUnitId);
    const toUnit = this.findUnit(toUnitId);
    
    if (!fromUnit || !toUnit) {
      throw new ConversionError('Invalid unit specified');
    }

    return this.performConversion(value, fromUnit, toUnit);
  }

  // Convert to all available units
  public convertToAll(value: number, fromUnitId: string): ConversionResult[] {
    if (!this.isValidValue(value)) return [];

    return this.units.map(unit => ({
      unit,
      value: this.convert(value, fromUnitId, unit.id),
      formattedValue: this.formatValue(
        this.convert(value, fromUnitId, unit.id)
      ),
      isExact: this.isExactConversion(fromUnitId, unit.id),
      precision: this.precision
    }));
  }

  // Abstract methods for subclasses
  protected abstract performConversion(
    value: number, 
    fromUnit: Unit, 
    toUnit: Unit
  ): number;

  // Utility methods
  protected findUnit(unitId: string): Unit | undefined {
    return this.units.find(u => u.id === unitId);
  }

  protected validateInput(
    value: number, 
    fromUnitId: string, 
    toUnitId: string
  ): void {
    if (!this.isValidValue(value)) {
      throw new ConversionError('Invalid input value');
    }
    
    if (!this.findUnit(fromUnitId) || !this.findUnit(toUnitId)) {
      throw new ConversionError('Invalid unit specified');
    }
  }

  protected isValidValue(value: number): boolean {
    return typeof value === 'number' && 
           !isNaN(value) && 
           isFinite(value);
  }

  protected formatValue(value: number): string {
    if (value === 0) return '0';
    
    const absValue = Math.abs(value);
    
    if (absValue >= 1e6 || absValue <= 1e-6) {
      return value.toExponential(6);
    }
    
    return Number(value.toPrecision(this.precision)).toString();
  }

  protected isExactConversion(fromUnitId: string, toUnitId: string): boolean {
    return fromUnitId === toUnitId;
  }

  // Getters
  public getUnits(): Unit[] {
    return [...this.units];
  }

  public getCategoryId(): string {
    return this.categoryId;
  }

  public getBaseUnit(): Unit {
    return this.baseUnit;
  }
}
```

### 2. Converter Factory (`src/lib/converters/core/ConverterFactory.ts`)

```typescript
import { BaseConverter } from './BaseConverter';
import { ConverterRegistry } from './ConverterRegistry';
import { ConversionError } from '@/shared/utils/types';

export class ConverterFactory {
  private static registry = new ConverterRegistry();
  private static instances: Map<string, BaseConverter> = new Map();

  static registerConverter(
    categoryId: string, 
    converterClass: new () => BaseConverter
  ): void {
    this.registry.register(categoryId, converterClass);
  }

  static getConverter(categoryId: string): BaseConverter {
    if (!this.instances.has(categoryId)) {
      const ConverterClass = this.registry.get(categoryId);
      
      if (!ConverterClass) {
        throw new ConversionError(`No converter found for category: ${categoryId}`);
      }
      
      this.instances.set(categoryId, new ConverterClass());
    }
    
    return this.instances.get(categoryId)!;
  }

  static getAllCategories(): string[] {
    return this.registry.getAllCategories();
  }

  static clearCache(): void {
    this.instances.clear();
  }
}
```

### 3. Feature-based Hook (`src/features/conversion/hooks/useConversion.ts`)

```typescript
import { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConverterFactory } from '@/lib/converters/core/ConverterFactory';
import { ConversionResult } from '@/shared/utils/types';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { 
  setInputValue, 
  setFromUnit, 
  setToUnit,
  setResults 
} from '@/store/slices/conversionSlice';

export const useConversion = (categoryId: string) => {
  const dispatch = useDispatch();
  const {
    inputValue,
    fromUnit,
    toUnit,
    results
  } = useSelector(state => state.conversion);

  const debouncedValue = useDebounce(inputValue, 300);
  
  const converter = useMemo(() => {
    try {
      return ConverterFactory.getConverter(categoryId);
    } catch (error) {
      console.error('Error creating converter:', error);
      return null;
    }
  }, [categoryId]);

  const units = useMemo(() => {
    return converter?.getUnits() || [];
  }, [converter]);

  const performConversion = useCallback(async () => {
    if (!converter || !fromUnit || !debouncedValue) {
      dispatch(setResults([]));
      return;
    }

    try {
      const numValue = parseFloat(debouncedValue);
      if (isNaN(numValue)) {
        dispatch(setResults([]));
        return;
      }

      const conversionResults = converter.convertToAll(numValue, fromUnit);
      dispatch(setResults(conversionResults));
    } catch (error) {
      console.error('Conversion error:', error);
      dispatch(setResults([]));
    }
  }, [converter, fromUnit, debouncedValue, dispatch]);

  const updateInputValue = useCallback((value: string) => {
    dispatch(setInputValue(value));
  }, [dispatch]);

  const updateFromUnit = useCallback((unitId: string) => {
    dispatch(setFromUnit(unitId));
  }, [dispatch]);

  const updateToUnit = useCallback((unitId: string) => {
    dispatch(setToUnit(unitId));
  }, [dispatch]);

  // Auto-perform conversion when dependencies change
  useMemo(() => {
    performConversion();
  }, [performConversion]);

  // Set default unit when units change
  useMemo(() => {
    if (units.length > 0 && !fromUnit) {
      updateFromUnit(units[0].id);
    }
  }, [units, fromUnit, updateFromUnit]);

  return {
    inputValue,
    fromUnit,
    toUnit,
    results,
    units,
    updateInputValue,
    updateFromUnit,
    updateToUnit,
    isLoading: !converter,
    converter
  };
};
```

### 4. Component Structure (`src/components/organisms/Converter/ConverterMain.tsx`)

```typescript
import React from 'react';
import { ConverterInput } from './ConverterInput';
import { ConverterResults } from './ConverterResults';
import { useConversion } from '@/features/conversion/hooks/useConversion';
import { ErrorBoundary } from '@/shared/components/ErrorBoundary';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';

interface ConverterMainProps {
  categoryId: string;
  className?: string;
}

export const ConverterMain: React.FC<ConverterMainProps> = ({
  categoryId,
  className = ''
}) => {
  const {
    inputValue,
    fromUnit,
    results,
    units,
    updateInputValue,
    updateFromUnit,
    isLoading
  } = useConversion(categoryId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`space-y-4 ${className}`}>
        <ConverterInput
          value={inputValue}
          selectedUnit={fromUnit}
          units={units}
          onValueChange={updateInputValue}
          onUnitChange={updateFromUnit}
        />
        
        <ConverterResults
          results={results}
          isLoading={isLoading}
        />
      </div>
    </ErrorBoundary>
  );
};
```

### 5. Configuration Management (`src/lib/config/app.config.ts`)

```typescript
export const APP_CONFIG = {
  name: 'Professional Unit Converter',
  version: '2.0.0',
  description: 'Professional unit converter for everyday use',
  
  // Features
  features: {
    favorites: true,
    history: true,
    offlineMode: true,
    analytics: false,
    customUnits: false
  },
  
  // Limits
  limits: {
    maxFavorites: 50,
    maxHistoryItems: 100,
    maxCustomUnits: 20,
    conversionPrecision: 8
  },
  
  // UI
  ui: {
    debounceDelay: 300,
    animationDuration: 200,
    maxMobileWidth: 768,
    categoriesPerRow: 2
  },
  
  // Storage
  storage: {
    prefix: 'unit_converter_',
    version: 'v2',
    ttl: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
} as const;

export type AppConfig = typeof APP_CONFIG;
```

## 🚀 Benefits of This Architecture

### ✅ **Modularity**
- **Feature-based organization** - Easy to find and modify specific functionality
- **Atomic design components** - Reusable UI building blocks
- **Separation of concerns** - Logic, UI, and data are cleanly separated
- **Plugin architecture** - Easy to add new converters and features

### ✅ **Scalability**
- **Factory pattern** - Dynamic converter loading
- **Registry system** - Automatic converter discovery
- **State management** - Centralized app state with Redux
- **Code splitting** - Lazy loading of components and features

### ✅ **Maintainability**
- **TypeScript throughout** - Type safety and better IDE support
- **Consistent structure** - Every feature follows the same pattern
- **Error boundaries** - Graceful error handling
- **Comprehensive testing** - Unit, integration, and e2e tests

### ✅ **Developer Experience**
- **Hot reloading** - Instant feedback during development
- **ESLint & Prettier** - Code quality and consistency
- **Storybook ready** - Component documentation and testing
- **VSCode configuration** - Optimized IDE setup

This architecture allows you to easily add new converters, features, and UI components while maintaining clean, testable, and scalable code!