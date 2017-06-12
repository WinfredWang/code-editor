interface Item {
    name: string;
    label: string;
    value: string;
}
interface Option {
    id?: string;
    container?: HTMLElement;
}

export { Item, Option }