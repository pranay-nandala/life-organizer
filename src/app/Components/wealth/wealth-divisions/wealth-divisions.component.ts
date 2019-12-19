import { OnsNavigator, Component } from 'ngx-onsenui';
import { CalculatorsComponent } from '../calculators/calculators.component';

@Component({
  selector: 'ons-page',
  templateUrl: './wealth-divisions.component.html',
  styleUrls: [ './wealth-divisions.component.css' ]
})
export class WealthDivisionsComponent {

  constructor(private _navigator: OnsNavigator) {

  }

  openCalculators(): void {
    this._navigator.element.pushPage(CalculatorsComponent);
  }
}
