import { Component } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './financial-calculator.component.html',
  styleUrls: [ './financial-calculator.component.css' ]
})
export class FinancialCalculatorComponent {
  
  showCalculatedResult: boolean = false;
  CalculatedEMIAmount: number = 0;
  LoanAmount: number;
  InterestRate: number;
  NoOfMonths: number;

  constructor() {
  }

  EmiCalculation(): void {
    this.showCalculatedResult = true;
    var r = this.InterestRate/(12*100); // to calculate rate percentage..
    var prate = (this.LoanAmount * r * Math.pow((1+r), this.NoOfMonths))/(Math.pow((1+r),this.NoOfMonths)-1); // to calculate compound interest..
// to assign value in field1 as fixed upto two decimal..
    //document.formval.field1.value = emi.toFixed(2);
//to assign value in field2..   
    //var tot = Math.round(document.formval.field1.value * n * 100)/100; // to calculate total amount
    //document.formval.field2.value = Math.abs(tot);
// to assign value in field3..  
    //var int_amt = document.formval.field2.value - P; // to calculate net interest amount
    //document.formval.field3.value =  int_amt.toFixed(2);

    this.CalculatedEMIAmount = Math.ceil(prate * 100) / 100; // to parse emi amount..
    //[P x R x (1+R)^N]/[(1+R)^N-1]
  }
  
  onClear(): void {
    this.showCalculatedResult = false;
    this.LoanAmount = 0;
    this.CalculatedEMIAmount = 0;
    this.InterestRate = 0;
    this.NoOfMonths = 0;
  }
}
