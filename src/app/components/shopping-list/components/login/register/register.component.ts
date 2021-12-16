import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      username:['',Validators.required],
      password:['',Validators.required],
      repassword:['',Validators.required]},{
        validators: this.reCheckPass('password','repassword')
      }
    )}
  
  reCheckPass(password:string,repassword:string){
     return(formGroup:FormGroup)=>{
       const control = formGroup.controls[password];
       const controlConfirm = formGroup.controls[repassword];
       if(controlConfirm.errors && !controlConfirm.errors['reCheckPass']){
         return
       }
       if(control.value !== controlConfirm.value){
        controlConfirm.setErrors({reCheckPass:true});
       }else{
        controlConfirm.setErrors(null)
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
