import { Component, ViewEncapsulation, OnInit, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ItemService } from './infrastrucure/items-services';
import { ItemTodoList } from './models/item';
import { ITEMS } from './models/mock-item-list';
import { ListItemComponent } from "./components/items-list/template/list-item.component";



@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ListItemComponent]
})
export class AppTodoList implements OnInit {
  modalVisible: boolean = true;
  constructor (private itemService: ItemService, private route: Router) {}
  title = 'Todo List';
  ItemsList: ItemTodoList[] = this.itemService.getITEMS();
  
  addItem(title: string) {
    if (title.length == 0) return;
    this.itemService.addPokemon(new ItemTodoList(title, false))
    console.table(ITEMS)
    this.route.navigate(["/"])
    
  }


  ngOnInit(): void {
    this.ItemsList = this.itemService.getITEMS();
  }
}