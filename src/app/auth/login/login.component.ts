import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={};
  loading: boolean;
  constructor(
    public api:ApiService,
    public router:Router,
    public auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
    
  }
  
 
  hide:boolean=true;
  lodiang:boolean;
  login(user)
  {
    this.loading=true;
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(res=>{
     this.loading=false;
     this.router.navigate(['admin/dashboard']);
    }).catch(err=>{
      this.loading=false;
      alert('Tidak dapat login');


    })
  }
}

