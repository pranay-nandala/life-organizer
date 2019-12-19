import { Component } from 'ngx-onsenui';
import { HealthComponent } from './Components/health/health.component';
import { WealthComponent } from './Components/wealth/wealth.component';
import { SpiritualComponent } from './Components/spiritual/spiritual.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab1 = HealthComponent;
  tab2 = WealthComponent;
  tab3 = SpiritualComponent;

  constructor() { }
}
