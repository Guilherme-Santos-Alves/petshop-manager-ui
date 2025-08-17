import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ps-btn-primary',
  templateUrl: './ps-btn-primary.component.html',
  styleUrls: ['./ps-btn-primary.component.scss']
})
export class PsBtnPrimaryComponent implements OnInit {
  @Input() typeBtn: string = '';
  @Input() textBtn: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
