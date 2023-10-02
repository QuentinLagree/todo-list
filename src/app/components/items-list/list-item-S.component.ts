import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ListItemComponent } from "./template/list-item.component";
import { ItemTodoList } from "src/app/models/item";
import { ItemService } from "src/app/infrastrucure/items-services";


@Component({
    selector: 'app-list-pokemon-smart',
    inputs: ["alert"],
    template: '<app-list-item [items-list]="ItemsList"></app-list-item>',
    standalone: true,
    imports: [ListItemComponent]
})
export class SmartListComponent {

    ItemsList: ItemTodoList[] = [];  

    constructor(private router: Router, private ItemService: ItemService) {}

    ngOnInit(): void {
        this.ItemsList = this.ItemService.getITEMS();
    }
}