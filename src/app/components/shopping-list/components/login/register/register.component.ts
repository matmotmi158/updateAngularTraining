import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister !: FormGroup
  constructor(private formBuilderService: FormBuilder,
    private transferService:TransferService,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.formRegister = this.formBuilderService.group({
      username:['',Validators.required,[this.isUserNameExists.bind(this)]],
      password:['',Validators.required],
      repassword:['',Validators.required]},
      {
        validators: this.reCheckPass('password','repassword')
      }
    )}
    isUserNameExists(control:AbstractControl){
      return this.transferService.allAccount$.pipe(map(data=>{
        let checkExists = data.find(item => item.username === control.value);
        if(checkExists){
          control.setErrors({isUserNameExists:true});
        }else{
          control.setErrors(null)
        }
      }));
    }
  
  reCheckPass(password:string,repassword:string){
     return(formGroup:FormGroup)=>{
       const pass = formGroup.controls[password];
       const reCheck = formGroup.controls[repassword];
       if(reCheck.errors && !reCheck.errors['reCheckPass']){
         return
       }
       if(pass.value !== reCheck.value){
        reCheck.setErrors({reCheckPass:true});
       }else{
        reCheck.setErrors(null)
       }
     }
  
  }
   
  onRegister(){
    const value = this.formRegister.getRawValue();
    let id = this.transferService.generateID();
    const newAccount = new Account(id,value.username,value.password,"user",[])
    this.transferService.createAccount(newAccount);
    if(confirm("Đăng ký thành công bạn có muốn quay lại trang đăng nhập không?")){
      this.router.navigateByUrl('/login')
    }
    this.formRegister.reset()
  }
}
