
export class ItemTodoList {

    id: number;
    title: string;
    checked: boolean;
    created: Date;
    

    constructor (
        title: string = "Entrer un nom...",
        checked: boolean = false,
        created: Date = new Date()
    ) {
        this.id = Date.now();
        this.title = title;
        this.checked = checked;
        this.created = created;
    };
    

}