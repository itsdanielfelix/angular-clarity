import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClrFormsModule, ClrDropdownModule} from '@clr/angular';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink, RouterLinkActive,
    ClrFormsModule,
    ClrDropdownModule,
    ReactiveFormsModule, NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      return;
    }

    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;

    if (!username || !password) {
      return;
    }

    this.authenticationService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl('/'));

    this.loginForm.reset();
  }
}
