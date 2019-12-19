import { OnsNavigator, Params, Component } from 'ngx-onsenui';
import { FinancialCalculatorComponent } from './calculators/financial-calculator/financial-calculator.component';
import { WealthDivisionsComponent } from './wealth-divisions/wealth-divisions.component';

@Component({
  selector: 'ons-page',
  templateUrl: './wealth.component.html',
  styleUrls: [ './wealth.component.css' ]
})
export class WealthComponent {

  page = WealthDivisionsComponent;

  constructor() {}

}
