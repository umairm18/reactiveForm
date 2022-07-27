import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  backgroundimg:string = "/assets/contact.jpg"

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    name: new FormControl (''),
    feedback: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(11)])
  })

  get email(){ return this.contactForm.get('email')}
  get number(){return this.contactForm.get('number')}

  onSubmit() {
    console.clear();
    console.warn(this.contactForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}