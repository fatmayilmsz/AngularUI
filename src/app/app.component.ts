import { Component } from '@angular/core';
import { HttpServiceService } from './http.service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uiproject';
  path = "http://localhost:4200/api";
}
