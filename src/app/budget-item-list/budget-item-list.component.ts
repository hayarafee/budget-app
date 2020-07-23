import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { MatDialog , MatDialogModule } from '@angular/material/dialog';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {
@Input() budgetItems: BudgetItem[];
@Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
@Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  onDeleteButtonClicked(item : BudgetItem){
    this.delete.emit(item);

  }
  onCardCLicked(item : BudgetItem){
    const dialogRef = this.dialog.open(EditItemModelComponent,{
      width:'580px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
     // check if result has value
     if(result){
           this.update.emit({
             old:item,
             new: result
           });

     }
    })
  }

}
export interface UpdateEvent{
  old:BudgetItem,
  new : BudgetItem
}
