import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
name: string = '';  
date: string = '';
amount: number = 0;

onNameChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.name = input?.value ?? '';
  console.log('User typed:', this.name);
}

onDateChange(event: Event): void {
  const inputdate = event.target as HTMLInputElement;
  this.date = inputdate?.value?? '';
  console.log('User typed:', this.date )
}

onAmountChange(event: Event): void {
  const amount = event.target as HTMLInputElement;
  this.amount = parseFloat(amount?.value?? '');
  console.log('User typed:', this.amount )
}
}
