import { Component, signal } from '@angular/core';
import { ButtonPrimary } from "../button-primary/button-primary";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter';

@Component({
  selector: 'app-newletters-form',
  imports: [ButtonPrimary, ReactiveFormsModule],
  templateUrl: './newletters-form.html',
  styleUrl: './newletters-form.scss',
  providers:[
    NewsletterService
  ]
})
export class NewlettersForm {
  newsLetterForm!:FormGroup;
  loading = signal(false);
  constructor(private service: NewsletterService){
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', Validators.required ),
      email: new FormControl('', [Validators.required, Validators.email] )
    })
  }
  onSubmit(){
    this.loading.set(true)
    if(this.newsLetterForm.valid){
      this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
        next: () =>{
          this.newsLetterForm.reset
          this.loading.set(false)
        }
      })
    }
  }
}
