import { Component, OnsNavigator } from 'ngx-onsenui';
import { FinancialCalculatorComponent } from './financial-calculator/financial-calculator.component';


@Component({
  selector: 'ons-page',
  templateUrl: './calculators.component.html',
  styleUrls: [ './calculators.component.css' ]
})
export class CalculatorsComponent {

  constructor(private _innerNavigator: OnsNavigator) {

  }

  openFinanceCalculator(): void {
    this._innerNavigator.element.pushPage(FinancialCalculatorComponent);
  }
}
