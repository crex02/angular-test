import { Component } from '@angular/core';
import { ElaborationService } from './services/elaboration/elaboration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simo-test';

  constructor (private elabServ:ElaborationService){
    const arrayOfNumbers = elabServ.fromStringToArrayOfNumbers('2 pippo 3 4 a 10');
    console.log(arrayOfNumbers);

    const numbers = [2,5,10,100,-20,8]

    const arrayOfData = elabServ.filterAnomalies(numbers, 10, -10);
    console.log(arrayOfData);
    console.log(numbers);
    
    
    
  }

}
