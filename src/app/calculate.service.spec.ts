import { TestBed, inject } from '@angular/core/testing';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    });
  });

  it('should be created', inject([CalculateService], (service: CalculateService) => {
    expect(service).toBeTruthy();
  }));
});
describe('Calcultor Without Inputs (Basic Class)', () => {
  let firstNumber :number = 0;
  let secondNumber :number = 0;
  let result : number = 0;
  let objCaculator :CalculateService ;
  beforeEach(() => { 
      this.objCaculator = new CalculateService ();
  });
  afterEach(() => { 
      this.objCaculator=null;
      this.firstNumber=0;
      this.secondNumber=0;
      this.result=0;
  });
  it('check number addition', () => {
      this.firstNumber=10;
      this.secondNumber=20;
      this.result=this.firstNumber + this.secondNumber;
      expect(this.objCaculator.addNumbers(this.firstNumber , this.secondNumber))
          .toEqual(this.result);
  });
  it('check number Subtract', () => {
      this.firstNumber=10;
      this.secondNumber=20;
      this.result=this.firstNumber - this.secondNumber;
      expect(this.objCaculator.subtractNumbers(this.firstNumber , this.secondNumber))
          .toEqual(this.result);
  });
  it('check number Multiply', () => {
      this.firstNumber=10;
      this.secondNumber=20;
      this.result=this.firstNumber * this.secondNumber;
      expect(this.objCaculator.multiplyNumbers(this.firstNumber , this.secondNumber))
          .toEqual(this.result);
  });
});

