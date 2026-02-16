import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariant = "primary" | "secondary";
@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  @Input('btn-text') btnText: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant : BtnVariant = "primary";
  @Output('submit') onSubmit = new EventEmitter();


  submit(){
    this.onSubmit.emit();
  }
  }
