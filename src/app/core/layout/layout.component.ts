import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  switchTheme: FormGroup = this.renderForm();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.renderForm();
  }

  renderForm() {
    return this.fb.group({
      theme: ['']
    })
  }

}
