import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charte-component',
  templateUrl: './charte-component.component.html',
  styleUrls: ['./charte-component.component.scss']
})
export class CharteComponentComponent implements OnInit {
  alertTypes: string[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'];

  constructor() { }

  ngOnInit() {
  }

}
