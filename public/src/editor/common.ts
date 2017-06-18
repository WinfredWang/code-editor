interface Item {
    name: string;
    path: string;
    language:string;
    value?: string;
    active?:boolean;
    viewState?:monaco.editor.IEditorViewState;
}
interface Option {
    id?: string;
    container?: HTMLElement;
}

export { Item, Option }