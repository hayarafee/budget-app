import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick : EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick : EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }
  onXButtonClicked(){
    this.xButtonClick.emit();
  }
  onCardClick(){
    this.cardClick.emit();
  }

}
