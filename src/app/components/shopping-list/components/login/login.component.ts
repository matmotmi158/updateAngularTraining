import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(
    private routerService: Router,
    private formBuilderService: FormBuilder,
    private transferService: TransferService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  checkLogin() {
    let username = this.formLogin.controls?.['username'].value;
    let password = this.formLogin.controls?.['password'].value;
    const allAccount = this.transferService.getAllAccount();
    let checkAccount = []
    let checkRoles !:boolean;
    checkAccount.push(allAccount.find(data => data.username === username))
    if(checkAccount[0]?.password === password){
      if(checkAccount[0]?.roles.toLowerCase() === 'admin'){
        checkRoles = true;
      }
      if(checkAccount[0]?.roles.toLowerCase() === 'user'){
        checkRoles = false;
      }
        this.routerService.navigate(['home']);
        this.transferService.saveLoginAccount(checkAccount);
    }
  }
  createForm() {
    this.formLogin = this.formBuilderService.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
// this.routerService.navigate(['home']);
//         localStorage.setItem('account', username);
//       }
//       if (username === 'user' && password === 'user') {
//         this.routerService.navigate(['home']);
//         localStorage.setItem('account', username);
//       }
