import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ClrDropdownModule, ClrFormsModule} from "@clr/angular";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ClrFormsModule, ClrDropdownModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };
}
