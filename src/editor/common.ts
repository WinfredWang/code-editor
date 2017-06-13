interface Item {
    name: string;
    path: string;
    language:string;
    value?: string;
    active?:boolean;
}
interface Option {
    id?: string;
    container?: HTMLElement;
}

export { Item, Option }