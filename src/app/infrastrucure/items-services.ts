import { Injectable } from '@angular/core';
import { ItemTodoList } from '../models/item';
import { ITEMS } from '../models/mock-item-list';

@Injectable({   providedIn: 'root' })
export class ItemService {

  getITEMS (): ItemTodoList[] {
    return ITEMS;
  }

  getPokemonByID(id: number): ItemTodoList {
    for (let item of ITEMS) {
        if (item.id == id) {
            return item;
        }
    }
    throw new Error(`L'index spécifié :${id} n'est pas correct !`)
  }

  updateItem(id: number, title: string) {
    this.getPokemonByID(id).title = title;
  }

  deleteItemById(id: number): void {
    let item: ItemTodoList | undefined = ITEMS.find(item => item.id == id);
    if (!item) return;
    ITEMS.splice(ITEMS.indexOf(item), 1)
  }

  addPokemon(item: ItemTodoList): ItemTodoList {
    ITEMS.push(item)
    return item;
  }
}
