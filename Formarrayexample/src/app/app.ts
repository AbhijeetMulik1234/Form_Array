import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Formarrayexample');
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      mySkills: this.fb.array([]), //Form array starts as empty
    });
  }
  // Getter for fromarray
  get skillss(): FormArray {
    return this.myForm.get('mySkills') as FormArray;
  }
  //create a single FormControl inside the array
  newSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
    });
  }
  // Add Skill
  addSkill() {
    this.skillss.push(this.newSkill());
  }
  // Remove skills by index
  removeSkill(index: number) {
    debugger;
    this.skillss.removeAt(index);
  }
  OnSubmit() {
    alert('form is submitted');
    console.log('Form submitted');
  }
}
