import { DeliveryCostCalculator } from '../../utils/calculateCost';

describe('DeliveryCostCalculator - calculateCost UNITS', () => {
  let calculatorFactory: DeliveryCostCalculator;

  beforeEach(() => {
    calculatorFactory = new DeliveryCostCalculator();
  });

  it('should calculate the cost correctly in template mode first case', () => {
    const width = 34;
    const height = 27;
    const depth = 2;
    const weight = 0.5;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('996.23');
  });

  it('should calculate the cost correctly in template mode second case', () => {
    const width = 17;
    const height = 12;
    const depth = 9;
    const weight = 0.3;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('996.23');
  });

  it('should calculate the cost correctly in template mode third case', () => {
    const width = 23;
    const height = 19;
    const depth = 10;
    const weight = 2;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1235.00');
  });

  it('should calculate the cost correctly in template mode fouth case', () => {
    const width = 33;
    const height = 25;
    const depth = 25;
    const weight = 5;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1444.95');
  });

  it('should calculate the cost correctly in template mode fifth case', () => {
    const width = 60;
    const height = 35;
    const depth = 30;
    const weight = 18;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1671.37');
  });

  it('should calculate the cost correctly in template mode sixth case', () => {
    const width = 60;
    const height = 60;
    const depth = 30;
    const weight = 20;
    const distance = 993187.7;
    const isStrict = false;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1914.25');
  });

  it('should fall due overload in template mode', () => {
    const width = 60;
    const height = 35;
    const depth = 30;
    const weight = 40;
    const distance = 993187.7;
    const isStrict = false;

    expect(() => {
      const calculator = calculatorFactory.getCalculator(isStrict);
      calculator.calculateCost(width, height, depth, weight, distance);
    }).toThrow('NO_TEMPLATE_SIZE_ERROR');
  });

  it('should fall due oversize in template mode', () => {
    const width = 100;
    const height = 35;
    const depth = 30;
    const weight = 18;
    const distance = 993187.7;
    const isStrict = false;

    expect(() => {
      const calculator = calculatorFactory.getCalculator(isStrict);
      calculator.calculateCost(width, height, depth, weight, distance);
    }).toThrow('NO_TEMPLATE_SIZE_ERROR');
  });

  it('should fall due Overweight in strict mode', () => {
    const width = 100;
    const height = 35;
    const depth = 100;
    const weight = 101;
    const distance = 993187.7;
    const isStrict = true;

    expect(() => {
      const calculator = calculatorFactory.getCalculator(isStrict);
      calculator.calculateCost(width, height, depth, weight, distance);
    }).toThrow('OVERWEIGHT_ERROR');
  });

  it('should calculate the cost correctly in strict as in strict same values', () => {
    const width = 17;
    const height = 12;
    const depth = 9;
    const weight = 0.3;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('996.23');
  });

  it('should calculate the cost correctly in strict less than first common item', () => {
    const width = 15;
    const height = 10;
    const depth = 8;
    const weight = 0.3;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('996.23');
  });

  it('should calculate the cost correctly in strict same as last common item', () => {
    const width = 60;
    const height = 60;
    const depth = 30;
    const weight = 20;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1914.25');
  });

  it('should calculate the cost correctly in strict more than last common item', () => {
    const width = 80;
    const height = 90;
    const depth = 40;
    const weight = 21;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('2015.83');
  });

  it('should calculate the cost correctly in strict same as first common item', () => {
    const width = 34;
    const height = 27;
    const depth = 2;
    const weight = 0.5;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('996.23');
  });

  it('should calculate the cost correctly in strict something in the middle of common v1', () => {
    const width = 33;
    const height = 25;
    const depth = 25;
    const weight = 10;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1486.12');
  });

  it('should calculate the cost correctly in strict something in the middle of common v1', () => {
    const width = 45;
    const height = 26;
    const depth = 21;
    const weight = 15;
    const distance = 993187.7;
    const isStrict = true;

    const calculator = calculatorFactory.getCalculator(isStrict);
    const cost = calculator.calculateCost(width, height, depth, weight, distance).toFixed(2);

    expect(cost).toEqual('1538.22');
  });
});
