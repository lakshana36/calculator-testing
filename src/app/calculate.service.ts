import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private _firstNumber:number=10;
  private _secondNumber:number=20;
  private _result : number = 0;
  constructor(){}
  public addNumbers(firstNumber : number, secondNumber : number ):number{
      return firstNumber + secondNumber;
  }
  public subtractNumbers(firstNumber : number, secondNumber : number ):number{
      return firstNumber - secondNumber;
  }
  public multiplyNumbers(firstNumber : number, secondNumber : number ):number{
      return firstNumber * secondNumber;
  }
}
