import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElaborationService {

  constructor() { }

  fromStringToArrayOfNumbers(input: string) {

    let array: number[] = [];

    const splittedString = input.split(' ');
    for (let i = 0; i < splittedString.length; i++) {
      const element = splittedString[i];
      const number = Number(element);
      if (!isNaN(number)) {
        array.push(number);
      }
    }
    // const res = input.replace(/[^0-9]/g, '');
    // array.push(res);
    // console.log(array);
    return array; 
  }

  filterAnomalies(numbers:number[], top:number, bottom:number){
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];

      if (element>top) {
        numbers[i] = top;
      }
      if (element<bottom) {
        numbers[i] = bottom
      }
    }
    return numbers;
  }



}
