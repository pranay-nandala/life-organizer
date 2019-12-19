import { OnsNavigator, Component } from 'ngx-onsenui';
import { HealthComponent } from '../Components/health/health.component';
import { WealthComponent } from '../Components/wealth/wealth.component';
import { SpiritualComponent } from '../Components/spiritual/spiritual.component';

@Component({
  selector: 'ons-page',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {

  constructor(private _navigator: OnsNavigator) { }

  onSegementSelection(index: number): void {
    switch (index) {
      case 0:
        this._navigator.element.pushPage(HealthComponent);
        break;
      case 1:
        this._navigator.element.pushPage(WealthComponent);
        break;
      case 2:
        this._navigator.element.pushPage(SpiritualComponent);
        break;
      default:
        this._navigator.element.pushPage(HealthComponent);
        break;
    }
    
  }
}
