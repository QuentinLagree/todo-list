import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/infrastrucure/items-services';
import { ItemTodoList } from 'src/app/models/item';


@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    standalone: true,
    imports: [DatePipe, NgFor, NgIf],
    styleUrls: ['../../../app.component.css'],
    inputs: ['ItemsList: items-list']
})
export class ListItemComponent {

  ItemsList: ItemTodoList[] = [];

  @ViewChild("title") title: ElementRef | undefined;

  constructor (private itemService: ItemService) {}

  
  deleteItem(id: number) {
    this.itemService.deleteItemById(id);
  }

  updateItem(id:number, title: string) {
    this.itemService.updateItem(id, title)
  }

  editForm(event: MouseEvent) {
    let target = (event.target as HTMLElement)   

    let contain = target.parentElement?.parentElement?.parentElement;

    contain?.classList.toggle("active")
  }

}
