import { Component } from '@angular/core';
import {
  ClarityModule,
  ClrTimelineModule,
  ClrTimelineLayout,
  ClrTimelineStepState,
} from '@clr/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClarityModule, ClrTimelineModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  readonly ClrTimelineLayout = ClrTimelineLayout;
  readonly ClrTimelineStepState = ClrTimelineStepState;
}
