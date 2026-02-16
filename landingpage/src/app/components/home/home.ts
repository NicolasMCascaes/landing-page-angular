import { Component } from '@angular/core';
import { Header } from "../header/header";
import { NgOptimizedImage } from "@angular/common";
import { ButtonPrimary } from "../button-primary/button-primary";
import { NewlettersForm } from "../newletters-form/newletters-form";

@Component({
  selector: 'app-home',
  imports: [Header, NgOptimizedImage, ButtonPrimary, NewlettersForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

}
