import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',

 templateUrl: './contact-form.component.html',

/*
  templateUrl: './test-form.html',
*/
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  category = [
    {id:1, name:'facebook'},
    {id:2, name:'twitter'}
  ]
  contactMethods =[
    {id:1, name: 'Email'},
    {id:2, name: 'call'},
    {id:3, name: 'Meet'},
    {id:4, name: 'Chat'},
  ]

  log(x) {
    console.log(x)
  }

  submit(x) {
    x.valid;
  }
}
/*test form*/
/*testttt*/
